import styles from "./AboutCard.module.css"; // Tus estilos para la malla del equipo

// Recibimos "teamList" que es la prop que se paso desde About.jsx
function AboutCard({ teamList }) {
    return (
        <div className={styles.AboutFlex}>
            {/* ¡Aquí es donde se hace el mapeo en este escenario! */}
            {teamList.map((members) => (
                <div key={members.id} className={styles.memberCard}>
                    <img src={members.foto} alt={members.nombre} />
                    <h3>{members.nombre}</h3>
                    <p>{members.puesto}</p>
                    <p>{members.email}</p>
                </div>
            ))}
        </div>
    );
}

export default AboutCard;