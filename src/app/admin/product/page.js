import ProductTable from '@/app/components/ProductTable';

export default function ProductsPage() {
    return (
        <div style={{ display: 'flex', flexDirection: "column", paddingTop: '50px', alignItems: "center", width: '70vw', overflow: 'auto', height: "100vh" }}>
            <h1 style={{ textAlign: 'center' }}>Produits</h1>
            <ProductTable />
        </div>
    );
}
