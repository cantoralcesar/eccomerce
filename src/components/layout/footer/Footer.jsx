import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";

import BrandLogo from "../../../assets/icons/brand-logo.png";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img src={BrandLogo} alt="Logo de Nexura" className={styles.logo} />
                    <p>
                        Somos una tienda online dedicada a ofrecer productos de calidad con envíos rápidos y atención personalizada.
                    </p>
                </div>
                
                <div className={styles.col}>
                    <h3>Información<div className={styles.underline}><span></span></div>
                    </h3>
                    <p>contacto@mitienda.com</p>
                </div>

                <div className={styles.col}>
                    <h3>Link<div className={styles.underline}><span></span></div></h3>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h3>Newsletter<div className={styles.underline}><span></span></div></h3>
                    <form className={styles.form}>
                        <input type="email" placeholder="Escribir su email" required />
                        <button type="submit">i</button>
                    </form>
                    <ul className={styles['social-list']}>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="icon tiktok" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon instagram" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className={styles.copyright}>&copy; 2026 - Mi Ecoomerce en React</p>
        </footer>
    );
}
export default Footer;