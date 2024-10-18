import logo from '../../logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/"><img width="50" src={logo} alt="Gnarly Griffin Logo" /></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/product-stock-update">Product Stock Updates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product-management">Product Management</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product-capture">Product Capture</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;