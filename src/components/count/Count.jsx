import { useState } from 'react';

import styles from "./Count.module.css";

export function Count({ onChange, max }) {
    // Estado interno del contador (inicia en 1)
    const [count, setCount] = useState(max > 0 ? 1 : 0);   // empieza en 1, no en 0
    
    // Función para aumentar la cantidad
    const increase = () => {
        if (count < max ) {               // 👈 solo aumenta si no llegó al stock
            const newValue = (count + 1); // usamos la función para actualizar el estado
            setCount(newValue);
            onChange?.(newValue);         // 👈 aquí se envía el newValue al padre
    };
        }
        
    
    // Función para disminuir la cantidad (mínimo 1)
    const decrease = () => {
        if (count > 1) { // evita que baje de 1
            const newValue = count - 1;
            setCount(newValue);
            onChange?.(newValue); // 👈 aquí también se envía al padre
        }
    };

    return (
        <div className={styles.info}>
            
            <div className={styles.btnQuantity}>
                <button className={styles.countBtnDecrease} onClick={decrease} disabled={count <= 1} > - </button>
                <span className={styles.countItemQuantity}>{count}</span>
                <button className={styles.countBtnIncrease} onClick={increase} disabled={count === max} > + </button>
            </div>
            
        </div>
    );
}