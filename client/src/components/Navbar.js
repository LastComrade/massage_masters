
function Navbar() {
    return (
        // <h1>hello world</h1>
        <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Massage</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Book Appointmeny</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Gallery</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Testimonials</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;