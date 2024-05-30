
export default function NotFound() {
    return (
        <>
            <div className="inner-banner">
                <div className="container">
                    <div className="inner-title text-center">
                        <h3>404 page</h3>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <i className="las la-angle-right"></i>
                            </li>
                            <li>404 page</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content">
                            <h1>4 <span>0</span> 4</h1>
                            <h3>Oops! Page Not Found</h3>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily
                                unavailable.</p>
                            <a href="/" className="default-btn">
                                Return To Home Page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}