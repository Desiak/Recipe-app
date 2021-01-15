import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">First Next!</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div class="dropdown">
                <button
                  class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Meat
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <Link href="/pasta">
                      <a class="dropdown-item">Chicken</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">Beef</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">Seafood</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      <a class="dropdown-item">Prok</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/meat">
                <a className="nav-link">Meat</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/vege">
                <a className="nav-link">Vege</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pasta">
                <a className="nav-link">Pasta</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/desserts">
                <a className="nav-link">Desserts</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
