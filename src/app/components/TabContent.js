'use client'
import { useState, useEffect } from "react";

export default function TabContent({ activeTab, productId }) {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [review, setReview] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchProductData();
    }, [productId]);

    const fetchProductData = async () => {
        try {
            const response = await fetch(`/api/review/${productId}`);
            const data = await response.json();

            if (data.success) {
                setProductData(data.product);
            } else {
                setError(data.message || 'Failed to fetch product data');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/review/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    commentaire: review,
                    note: 5, // Assuming a static rating for now, you might want to make it dynamic
                    productId,
                    firstName,
                    lastName,
                    email,
                }),
            });

            if (response.ok) {
                // Handle success (e.g., display a success message or clear the form)
                console.log('Review submitted successfully');
                setEmail('')
                setFirstName('')
                setLastName('')
                setReview('')
                fetchProductData()
            } else {
                // Handle error
                console.error('Error submitting review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="tab-content">
            {activeTab === 'Reviews' && productData && (
                <div className="tab-content-item">
                    <h2>Reviews</h2>
                    <div className="review-summary">
                        <span>Based on {productData.totalComments} Reviews</span>
                        <h3>{productData.averageRating.toFixed(1)}</h3>
                        <div className="rating">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`las la-star${i < Math.floor(productData.averageRating) ? '' : '-half-alt'}`}></i>
                            ))}
                        </div>
                        <p>{productData.totalComments} Ratings</p>
                    </div>
                    <div className="review-list">
                        {productData.comments.map(comment => (
                            <div key={comment.id} className="review-item">
                                <h3>{comment.author}</h3>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className={`las la-star${i < comment.note ? '' : '-half-alt'}`}></i>
                                    ))}
                                </div>
                                <p>{comment.commentaire}</p>
                            </div>
                        ))}
                    </div>
                    <div className="review-form">
                        <h3>Add Your Review</h3>
                        <form id="reviewForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Email<span>*</span></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Review<span>*</span></label>
                                <textarea
                                    name="review"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Your review"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn">Send Message</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
