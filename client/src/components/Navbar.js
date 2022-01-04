import React from 'react';

import { Navbar, NavbarBrand } from "reactstrap";

const NavbarPage = props => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand
                className="nav-brand"
                onClick={ _ => {
                    props.setPage(0);
                }}
            >
                Plagiated for Flex project.
            </NavbarBrand>
        </Navbar>
    );
}

export default NavbarPage;