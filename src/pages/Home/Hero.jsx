
import styles from "./Hero.module.css";

const Hero =() => {
    return(
        
        <section className={styles.heroSection}>
            <h1>Hero</h1>
            <div className={styles.heroContainer}>
                {/* Aquí va el contenido que viste en el video */}
                <span className={styles.heroSubtitle}>New Arrival</span>
                <h1 className={styles.heroTitle}>Discover Our <br /> New Collection</h1>
                <p className={styles.heroDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className={styles.heroBtn}>SHOP NOW</button>
            </div>
        </section>
    )
}

export default Hero