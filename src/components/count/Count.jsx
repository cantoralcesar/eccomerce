import { useState } from 'react';

import styles from "./Count.module.css";
export function Count({ onChange }) {
    // Estado interno del contador (inicia en 1)
    const [count, setCount] = useState(1);   // empieza en 1, no en 0
    
    // Función para aumentar la cantidad
    const increase = () => {
        const newValue = (count + 1); // usamos la función para actualizar el estado
        setCount(newValue);
        onChange?.(newValue); // 👈 notifica al padre
    };
    
    // Función para disminuir la cantidad (mínimo 1)
    const decrease = () => {
        if (count > 1) { // evita que baje de 1
            const newValue = count - 1;
            setCount(newValue);
            onChange?.(newValue); // 👈 notifica al padre
        }
    };

    return (
        <div className={styles.info}>
            <p><strong>Cantidad:</strong> {count}</p>
            <div className={styles.btnQuantity}>
                <button  onClick={increase}>+</button>
                <button  onClick={decrease}>-</button>
            </div>
            
        </div>
    );
}