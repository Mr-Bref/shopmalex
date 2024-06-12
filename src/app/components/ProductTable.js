'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { Table, Popover, Whisper, Pagination } from 'rsuite';
import { Modal, Button } from 'rsuite';
import ConversionIcon from '@rsuite/icons/Conversion';
import TrashIcon from '@rsuite/icons/Trash';
import Image from 'next/image';
import { useTableRefresh } from '@/contexts/TableRefreshProvider';

const { Column, HeaderCell, Cell } = Table;

const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (
        <Popover title="Description" >
            <p><b>Name:</b> {rowData.name}</p>
            <p><b>Description:</b> {rowData.description}</p>
        </Popover>
    );

    return (
        <Cell {...props}>
            <Whisper placement="left" speaker={speaker}>
                <a>{rowData[dataKey]}</a>
            </Whisper>
        </Cell>
    );
};

const ImageCell = ({ rowData, dataKey, ...props }) => {
    const firstImage = rowData.images.length ? rowData.images[0] : null;

    return (
        <Cell {...props} style={{ padding: 0 }}>
            {firstImage ? (
                <Image src={`/images${firstImage.url}`} alt={firstImage.label} width="40" height="40" />
            ) : (
                'No Image'
            )}
        </Cell>
    );
};

// Define a new component for displaying product details in a modal
const ProductModal = ({ productId, open, onClose }) => {
    const [product, setProduct] = useState(null);
    const [reload, setReload] = useState(false); // State to trigger reload

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/product/${productId}`);
                const data = await response.json();
                if (data.success) {
                    console.log(data.product)
                    setProduct(data.product);
                } else {
                    console.error('Failed to fetch product:', data.message);
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [productId, reload]);

    const deleteImage = async (imageId) => {
        try {
            const response = await fetch(`/api/image/${imageId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                // Trigger reload when delete is successful
                setReload(!reload);
            }
            return data;
        } catch (error) {
            console.error('Error deleting image:', error);
            return { success: false, error: 'Something went wrong.' };
        }
    };

    async function updateImage(e, imageId) {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`/api/image/${imageId}`, {
                method: 'PATCH',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                if (data.success) {
                    // Trigger reload when delete is successful
                    setReload(!reload);
                }
                console.log('Image updated successfully:', data.image);
                // Optionally, refresh the image display or perform other UI updates here
            } else {
                console.error('Failed to update image:', data.error);
            }
        } catch (error) {
            console.error('Error updating image:', error);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        formData.append('productId', productId);

        try {
            const response = await fetch('/api/image', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setReload(!reload); // Trigger reload to update images
                e.target.value = '';
            } else {
                console.error('Failed to upload image:', data.error);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    if (!product) {
        return (
            <Modal size="md" open={open} onClose={onClose}>
                <Modal.Body style={{ display: "grid", alignContent: "center" }}>Chargement...</Modal.Body>
            </Modal>
        )
    }

    return (
        <Modal size="md" open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', justifyContent: "space-between", gap: "10px", padding: "24px" }}>
                    <div>
                        <p><b>Description:</b> {product.description}</p>
                        <p><b>Category:</b> {product.category}</p>
                        <p><b>Price:</b> {product.price}$</p>
                    </div>
                    <div>
                        <input type="file" onChange={handleImageUpload} accept="image/*" />
                        {/*image upload input here here*/}
                    </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }} className='image'>
                    {product.images.map((image, index) => (
                        <div className='image-wrapper' key={index}>
                            <div className="product-image" id={`image-view-${image.id}`}>
                                <Image src={`/images${image.url}`} alt={image.label} width={100} height={100} />
                                <div className='action'>
                                    <span style={{ cursor: 'pointer' }} onClick={() => deleteImage(image.id)}><TrashIcon /></span>
                                    <label htmlFor={image.id} style={{ cursor: "pointer" }}>
                                        <span><ConversionIcon /></span>
                                    </label>
                                    <input type='file' onChange={(e) => updateImage(e, image.id)} id={image.id} style={{ display: 'none', visibility: "none" }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose} appearance="subtle">
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const ActionCell = ({ rowData, dataKey, ...props }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { updateSetReloadTable } = useTableRefresh();

    const handleViewDetails = (product) => {

        setSelectedProduct(product);
        setOpenModal(true);
    };

    return (
        <>
            <Cell {...props} className="link-group row">
                <Button onClick={() => handleViewDetails(rowData)} appearance="link">
                    View
                </Button>
            </Cell>
            {selectedProduct && (
                <ProductModal
                    productId={selectedProduct.id}
                    open={openModal}
                    onClose={() => {
                        setOpenModal(false)
                        updateSetReloadTable()
                    }}
                />
            )}
        </>
    );
};

export default function ProductTable() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const { reloadTable, updateSetReloadTable } = useTableRefresh();


    useEffect(() => {
        setLoading(true);
        fetch(`/api/product?page=${page}&pageSize=${limit}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setProducts(data.products);
                    setTotal(data.total);
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page, limit, reloadTable]);

    const handleChangeLimit = (dataKey) => {
        setPage(1); // Reset to first page
        setLimit(dataKey);
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className='table-container'>
            <Table autoHeight width={830} data={products} className='table-container'>
                <Column width={50} align="center">
                    <HeaderCell>ID</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={160} align="center">
                    <HeaderCell>Name</HeaderCell>
                    <NameCell dataKey="name" />
                </Column>

                <Column width={200} align="center">
                    <HeaderCell>Description</HeaderCell>
                    <Cell dataKey="description" />
                </Column>

                <Column width={100} align="center">
                    <HeaderCell>Price</HeaderCell>
                    <Cell dataKey="price" />
                </Column>

                <Column width={200} align="center">
                    <HeaderCell>Image</HeaderCell>
                    <ImageCell dataKey="images" />
                </Column>

                <Column width={120} align="center">
                    <HeaderCell>Actions</HeaderCell>
                    <ActionCell dataKey="id" />
                </Column>
            </Table>
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                maxButtons={4}
                size="xs"
                layout={['total', '-', '|', 'pager']}
                total={total}
                limitOptions={[10, 20, 30]}
                limit={limit}
                activePage={page}
                onChangePage={setPage}
                onChangeLimit={handleChangeLimit}
            />
        </div>
    );
}
