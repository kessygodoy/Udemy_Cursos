import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKsJLMpMwp2rYSReQu4n466oQkWN6qpx4",
  authDomain: "tarefas-fe5f3.firebaseapp.com",
  projectId: "tarefas-fe5f3",
  storageBucket: "tarefas-fe5f3.firebasestorage.app",
  messagingSenderId: "379327388885",
  appId: "1:379327388885:web:8b31e3882853c32432d65c"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export {db};