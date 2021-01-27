import Link from "next/link";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MDBNavbar color="elegant-color" dark expand="md" className="mb-5">
        <MDBNavbarBrand>
          <strong className="white-text">First Next!</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => toggleCollapse()} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <Link href="/">
                <a className="nav-link px-4">Home</a>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link href="/site/pasta/1?f=filter.php&&crit=c">
                <a className="nav-link">Pasta</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/site/vegetarian/1?f=filter.php&&crit=c">
                <a className="nav-link">Vegetarian</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/site/dessert/1?f=filter.php&&crit=c">
                <a className="nav-link">Desserts</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Meat</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link href="/site/chicken/1?f=filter.php&&crit=c">
                      <a className="dropdown-item">Chicken</a>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/site/beef/1?f=filter.php&&crit=c">
                      <a className="dropdown-item">Beef</a>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/site/seafood/1?f=filter.php&&crit=c">
                      <a className="dropdown-item">Seafood</a>
                    </Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem>
                    <Link href="/site/pork/1?f=filter.php&&crit=c">
                      <a className="dropdown-item">Pork</a>
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
