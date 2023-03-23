import Link from 'next/link'

function Navbar() {
    return (
     
     <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img className="navbar-brand" src="/img/logo-nobg.png"></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/" className="nav-item">
                <a className="nav-link active" aria-current="page">Home</a>
                </Link>
                <Link href="/about-fostering" className="nav-item">
                <a className="nav-link active" aria-current="page">About Fostering</a>
                </Link>
                <Link href="/become-a-foster-parent" className="nav-item">
                <a className="nav-link active" aria-current="page">Become a Foster Parent</a>
                </Link>
                <Link href="/info-for-cas" className="nav-item">
                <a className="nav-link active" aria-current="page">Info for CAS</a>
                </Link>
        
                
              
            </ul>
            <ul className="navbar-nav">
            <Link className="nav-item" href="https://ln5.sync.com/dl/4228ad830/2tvhtqgj-2hv7mfgh-4fh3gsan-fxjcifd8">
                    <a target="_blank" className="nav-link"><button className="btn btn-primary">Staff & Parent Login</button></a>
                    
                </Link>
                <Link className="nav-item" href="/#contact">
                    <a className="nav-link"><button className="btn btn-secondary">Contact Us</button></a>
                    
                </Link>
            </ul>
            </div>
        </div>
    </nav>
    
    );
}

export default Navbar;