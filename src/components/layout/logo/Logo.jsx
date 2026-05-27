import styles from "./Logo.module.css";
import BrandLogo from "../../../assets/icons/brand-logo.png";

function Logo() {
    return (
        <img src={BrandLogo} className={styles.logo} alt="Logo" />
    )
}
export default Logo;