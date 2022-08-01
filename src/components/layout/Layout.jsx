import React from "react";
import classes from "./layout.module.css";
const Layout = ({ children }) => {
    return (
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div className={classes.brand}>
                    <h3>Brand Name</h3>
                </div>
                <div className={classes.menu}>
                    <ul>
                        <li>Link one</li>
                        <li>Link Two</li>
                        <li>Link Three</li>
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
