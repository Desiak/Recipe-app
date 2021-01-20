import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">First Next!</a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link px-4">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle py-1 my-1 text-white-50"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    fontSize: "1.05em",
                  }}
                >
                  Meat
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link href="/category/filter.php?c=chicken">
                      <a className="dropdown-item">Chicken</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/filter.php?c=beef">
                      <a className="dropdown-item">Beef</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/filter.php?c=seafood">
                      <a className="dropdown-item">Seafood</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/category/filter.php?c=pork">
                      <a className="dropdown-item">Pork</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link href="/category/filter.php?c=vegetarian">
                <a className="nav-link">Vegetarian</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/category/filter.php?c=pasta">
                <a className="nav-link">Pasta</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/category/filter.php?c=dessert">
                <a className="nav-link">Desserts</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
