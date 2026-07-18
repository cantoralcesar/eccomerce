import { useState, useEffect } from "react";
import AboutCard from "../components/about/AboutCard"; // Tu componente de la lista
//import styles from "../pages/About.module.css";  Si usas estilos para la página

// Importaciones clave de Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function About() {
    // 1. Los tres estados
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    /*

    // 2. El useEffect con la lógica de carga y manejo de errores profesional
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch("/data/about.json");

                if (!response.ok) {
                    throw new Error("No se pudo conectar con el servidor");
                }

                const data = await response.json();
                setTeam(data); // Guarda los datos si todo sale bien

            } catch (err) {
                setError(err.message); // Guarda el error si algo falla
            } finally {
                setLoading(false); // Apaga el estado de carga al terminar
            }
        };

        fetchTeam();
    }, []);
    

    */

    useEffect(() => {
        // 1. Referencia a la colección "equipo" en Firestore
        const equiptmentBD = collection(db, "equipo")
        
        // 2. Traemos los documentos con getDocs (consulta única, no en tiempo real)
        getDocs(equiptmentBD)
        .then((resp) => {
            // 3. Mapeamos cada documento y le añadimos docId (id único de Firestore)
            setTeam(
                resp.docs.map((doc) => {
                    return { ...doc.data(),
                                docId: doc.id} // opcional: el id automático de Firestore
                })
            );
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);


    // 3. Experiencia de usuario - Renderizado condicional según estado
    if (loading) return <div>Cargando equipo...</div>;
    if (error) return <div>Hubo un error visible: {error}</div>;

    return (
        <div >
            <h2>Nuestro Equipo</h2>
            <div>
                
                {/* Le pasamos la lista limpia al AboutCard.jsx para que la mapee */}
                {/* Aquí se esta pasando la lista entera a una sola tarjeta en CSS*/}
                <AboutCard teamList={team} />
            </div>
        </div>
        
    );
}

export default About;