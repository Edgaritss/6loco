Organizador de Torneos "6 Locos de Pádel"

Una aplicación web completa para crear, gestionar y guardar el historial de torneos de pádel en la popular modalidad "6 Locos".

📜 Descripción

Este proyecto es una herramienta diseñada para simplificar la organización de torneos de pádel "6 Locos". Permite a los usuarios añadir jugadores, seleccionar entre diferentes modalidades de juego, generar rondas automáticamente y registrar los resultados en tiempo real. Gracias a la integración con Firebase, cada usuario tiene un historial persistente de todos los torneos jugados, pudiendo consultar los resultados en cualquier momento.

✨ Características Principales

Creación de Torneos: Configura torneos con un nombre personalizado, número de jugadores y canchas disponibles.

Dos Modalidades de Juego:

Parejas Rotativas: Los jugadores cambian de pareja en cada ronda. La puntuación es individual.

Parejas Fijas: Las parejas se mantienen durante todo el torneo. La puntuación es por equipo.

Generación Automática de Rondas: El sistema crea todos los enfrentamientos de forma inteligente, considerando el número de canchas para gestionar los partidos simultáneos y los descansos.

Tabla de Posiciones en Vivo: Los marcadores se actualizan en tiempo real a medida que se introducen los resultados.

Interfaz Intuitiva: Un sistema amigable para añadir y eliminar jugadores, y una navegación clara entre las distintas pantallas.

Historial de Torneos: Gracias a Firebase, cada torneo finalizado se guarda en la nube y puede ser consultado en una pantalla principal a modo de historial.

Diseño Responsivo: La interfaz se adapta perfectamente a cualquier dispositivo, ya sea móvil, tablet o escritorio.

🛠️ Tecnologías Utilizadas

Frontend: React (con Vite)

Estilos: Tailwind CSS

Base de Datos y Autenticación: Firebase (Firestore y Authentication)

🚀 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

Prerrequisitos

Tener instalado Node.js (versión 18 o superior).

Tener una cuenta de Firebase.

Pasos

Clona el repositorio:

git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
cd tu-repositorio


Instala las dependencias del proyecto:

npm install


Configura tu proyecto de Firebase:

Crea un nuevo proyecto en la consola de Firebase.

Registra una nueva aplicación web y copia tus credenciales de configuración.

En la carpeta src, crea un archivo llamado firebase.js y pega tu configuración, como en el siguiente ejemplo:

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


En la consola de Firebase, ve a Authentication > Sign-in method y habilita el proveedor Anónimo.

Ve a Firestore Database, crea una base de datos en modo de prueba y asegúrate de que las reglas de seguridad permitan la lectura y escritura para usuarios autenticados.

Inicia el servidor de desarrollo:

npm run dev


Abre tu navegador y visita http://localhost:5173 (o la URL que indique la terminal).

☁️ Despliegue (Deploy)

Este proyecto está preparado para ser desplegado fácilmente con Firebase Hosting. Sigue la guía oficial para conectar tu proyecto y desplegarlo con unos pocos comandos.
Soy el greñas
