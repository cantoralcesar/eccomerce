import Header from "./header/Header";
import Footer from "./footer/Footer";

import { Outlet } from "react-router-dom";

export function Layout( ) {
    return (
        <div style={ {border: "1px solid red"}}>
            <Header />
            <main className="container-main">
            <Outlet /> {/* Aquí se renderiza la página activa */}
            </main>
            <Footer />
        </div>
    );
}