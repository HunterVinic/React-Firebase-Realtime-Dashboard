
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

function StartFirebase(){
const firebaseConfig = {
  apiKey: "AIzaSyDs6mTbVq6_toV5ZoV-mb4xag2EyhqpJZI",
  authDomain: "smarthouse-v2.firebaseapp.com",
  databaseURL: "https://smarthouse-v2-default-rtdb.firebaseio.com",
  projectId: "smarthouse-v2",
  storageBucket: "smarthouse-v2.appspot.com",
  messagingSenderId: "406144935524",
  appId: "1:406144935524:web:476db484f4cad44f3be171"
};
const app = initializeApp(firebaseConfig);
return getDatabase(app);
}
export default StartFirebase;