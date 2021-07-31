import React from "react";
import axios from 'axios'
import {connect} from "react-redux";
import './scss/app.scss';

import {Header} from "./components/index";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import setPizza from "./redux/actions/pizza";


/*
function App() {
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setPizzas(data.pizzas);
        });
    }, []);
*/

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            window.store.dispatch(setPizza(data.pizzas))
        });
    }

    render() {
        console.log(this.props,'Пропсы')
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
                        <Route path="/cart" component={Cart} exact/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
    }
};


export default connect(mapStateToProps)(App);


