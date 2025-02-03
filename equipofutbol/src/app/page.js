import styles from "./page.module.css";

const Equipos = ({equipos})=>{
  return (
    <div className={styles.container__list}>
      <h2 className= {styles.title}>Equipos de Futbol</h2>
      {equipos.map((equipo) =>(
        <div key={equipo.id}>
          <h3 className="styles.nameclub">{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m<br></br>Peso: {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
          </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "plantilla":[
 {"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg"},
 {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg"},
 {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg"}
 ]}, 
  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Futbol</h1>
        <Equipos equipos={equiposData}/>
      </div>
    </main>
  );
}

