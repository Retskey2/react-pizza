import './scss/app.scss';
import {Header} from "./components/index";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";

function App() {

    const ClickBuy = () => {
        alert('Coming...')
    };

    return (
        <div>
            <div className="wrapper">
                <Header ClickBuy={ClickBuy}/>
                <div className="content">
                    <Route path="/" component={Home} exact/>
                    <Route path="/cart" component={Cart} exact/>
                </div>
            </div>
        </div>
    );
}

export default App;
