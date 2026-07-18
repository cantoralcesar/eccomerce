import { Link } from 'react-router-dom';

import Hamburger from "../../../assets/hamburger-icon.svg";
import Close from "../../../assets/close-icon.svg";

import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>

            <button className={styles["btn-open"]} aria-label="Abrir menú">
                <img src={Hamburger} alt="Abrir menú" />
            </button>
            <button className={styles["btn-close"]} aria-label="Cerrar menú">
                <img src={Close} alt="Cerrar menú" />
            </button>

            <ul className={styles.menu}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Nosotros</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                {/*            componente ProductBD                 */}
                {/* <li><Link to="/productBD">ProductBD</Link></li> */}

                <li><Link to="/register-product">Ingresar productos</Link></li>
                
            </ul>
        </nav>
        
    );
}

export default Nav;