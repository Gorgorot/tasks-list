import { useTheme } from "../../hooks/use-theme";
import { Container, Navbar } from "react-bootstrap";
import React from "react";
import { ThemeSwitchButton } from "../theme-switch-button/theme-switch-button";

export function TasksPageNavbar(props) {
    const [theme] = useTheme();

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={ theme }>
            <Container className="m-0 px-4" fluid>
                <Navbar.Brand>Tasks list</Navbar.Brand>
                <Navbar id="basic-navbar-nav">
                    <div className="d-flex flex-row align-items-center">
                        <ThemeSwitchButton/>
                    </div>
                </Navbar>
            </Container>
        </Navbar>
    );
}
