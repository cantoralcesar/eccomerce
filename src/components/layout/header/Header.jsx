import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import CartNav from "../cart/CartNav";

import styles from "./Header.module.css";

function Header() {
    return (
        <header className= { styles.header }>
            <div className={styles['container-header']}>
                <Logo />
                <Nav />
                <CartNav />
            </div>
        </header>
    );
}
export default Header;