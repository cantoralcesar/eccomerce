import Header from "./header/Header";
import Footer from "./footer/Footer";

import { Outlet } from "react-router-dom";

export function Layout( ) {
    return (
        <div style={ {border: "1px solid red"}}>
            <Header />    {/* nav, logo, cart */}
            <main className="container-main">
            <Outlet />    {/* ← aquí se inyectan las páginas */}
            </main>
            <Footer />
        </div>
    );
}