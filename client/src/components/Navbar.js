
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                <a class="navbar-brand" href="index.html"><span class="flaticon-lotus"></span>Energen</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="treatments.html" class="nav-link">Treatments</a></li>
                    <li class="nav-item"><a href="specialists.html" class="nav-link">Specialists</a></li>
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                </div>
                </div>
            </nav>
            
            {/* <nav className="navbar navbar-expand-lg bg-light ">
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
            </nav> */}
        </>
    );
}

export default Navbar;