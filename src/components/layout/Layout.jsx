import { Link } from "@reach/router";
import React from "react";
import classes from "./layout.module.css";
const Layout = ({ children }) => {
    const path = window.location.pathname;
    return (
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div className={classes.brand}>
                    <h3>Brand Name</h3>
                </div>
                <div className={classes.menu}>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={
                                    path === "/"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/help"
                                className={
                                    path === "/help"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={
                                    path === "/about"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/clock"
                                className={
                                    path === "/clock"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Clock
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tasks"
                                className={
                                    path === "/tasks"
                                        ? classes.navItemActive
                                        : classes.navItem
                                }
                            >
                                Tasks
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>{children}</main>
            <footer className={classes.footer}>
                <h3>Footer</h3>
                <ul>
                    <li>Footer link one</li>
                    <li>footer link two</li>
                    <li>footer link three</li>
                </ul>
            </footer>
        </div>
    );
};

export default Layout;
