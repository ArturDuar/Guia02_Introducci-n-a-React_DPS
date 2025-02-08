"use client";
import { useState } from "react"; import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  }

  const division = () => {
    const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
    if(numero2 == 0){
      setResultado("La división entre 0 no está definida");
    } else {
      setResultado(`Resultado de la división: ${resultadoDivision}`);
    } 
  }

  const potenciar = () => {
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potencia: ${resultadoPotencia}`);
  }

  const raizCuadrada = () => {
    const resultadoPotencia = Math.sqrt(parseFloat(numero1));
    if (numero1 < 0) {
      setResultado("No se puede obtener la raiz cuadrada de un número negativo");
    } else{
      setResultado(`Resultado de la raiz cuadrada del Numero 1: ${resultadoPotencia}`);
    }
  }

  const limpiar = () =>{
    setNumero1('');
    setNumero2('');
    setResultado('');
  }

  return (<main className={styles.main}>
    <div className={styles.calculadora}>
      <div className={styles.numeros}>
        <label className={styles.text}>Número 1:</label>
        <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      </div>
      <div className={styles.numeros}>
        <label className={styles.text} >Número 2:</label>
        <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>
      <div className={styles.container__buttons}>
        <button className={styles.button} onClick={sumar}>Sumar</button>
        <button className={styles.button} onClick={restar}>Restar</button>
        <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
        <button className={styles.button} onClick={division}>División</button>
        <button className={styles.button} onClick={potenciar}>Potenciar</button>
        <button className={styles.button} onClick={raizCuadrada}>Raiz cuadrada</button>
        <button className={styles.button} onClick={limpiar} name="Limpiar">Limpiar</button>
      </div>
      {resultado && <div className={styles.resultado}>{resultado}</div>}
    </div>
  </main>
  );
} 