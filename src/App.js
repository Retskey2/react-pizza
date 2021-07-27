import './scss/app.scss';
import {Header} from "./components/index";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'


function App() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setPizzas(data.pizzas);
        });
    }, []);


    return (
        <div>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() => <Home Items={pizzas}/>} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </div>
            </div>
        </div>
    );
}

export default App;


