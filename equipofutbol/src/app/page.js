import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul >
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__equipo} key={jugador.id}>
                <div className={styles.container__img}><img src={jugador.foto}></img></div>
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>Altura: {jugador.Altura}m </p>
                  <p>Peso: {jugador.Peso}</p>
                </div>         
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


export default function Home() {
  // Simula la obtención de datos desde tu JSON 
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg", "foto": "/assets/images/EdenHazard.jpeg" },
        { "id": 2, "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74Kg", "foto": "/assets/images/gonzaloGarcia.jpg" },
        { "id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg", "foto": "/assets/images/KarimBenzema.jpg" }
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        { "id": 1, "nombre": "Marc-André ter Stegen ", "Altura": "1.75", "Peso": "74Kg", "foto": "/assets/images/MarcAndre.jpeg" },
        { "id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74Kg", "foto": "/assets/images/InigoMartinez.jpg" },
        { "id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg", "foto": "/assets/images/Gavi.jpeg" }
      ]
    },
    {
      "id": 3,
      "nombre": "Manchester city",
      "plantilla": [
        { "id": 1, "nombre": "Erling Haaland", "Altura": "1.94", "Peso": "84Kg", "foto": "/assets/images/ErlingHaaland.webp" },
        { "id": 2, "nombre": "Omar Marmoush", "Altura": "1.83", "Peso": "81Kg", "foto": "/assets/images/OmarMarmoush.webp" },
        { "id": 3, "nombre": "Mateo Kovacic", "Altura": "1.77", "Peso": "75Kg", "foto": "/assets/images/MateoKovacic.jpg" }
      ]
    }
    // ... agregar otros equipos 
  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
} 