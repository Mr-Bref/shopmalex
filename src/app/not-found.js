
export default function NotFound() {
    return (
        <>
            <div class="inner-banner">
                <div class="container">
                    <div class="inner-title text-center">
                        <h3>404 page</h3>
                        <ul>
                            <li>
                                <a href="index-2.html">Home</a>
                            </li>
                            <li>
                                <i class="las la-angle-right"></i>
                            </li>
                            <li>404 page</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="error-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="error-content">
                            <h1>4 <span>0</span> 4</h1>
                            <h3>Oops! Page Not Found</h3>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily
                                unavailable.</p>
                            <a href="index-2.html" class="default-btn">
                                Return To Home Page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}