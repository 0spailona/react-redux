import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {mainStore} from "./mainStore.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
   <Provider store={mainStore()}>
            <App/>
    </Provider>
)
