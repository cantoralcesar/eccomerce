import Nav from "../nav/Nav";
import Logo from "../logo/Logo";
import Cart from "../cart/Cart";

import styles from "./Header.module.css";

function Header() {
    return (
        <header className= { styles.header }>
            <div className={styles['container-header']}>
                <Logo />
                <Nav />
                <Cart count={3} />
            </div>
        </header>
    );
}
export default Header;