import './scss/app.scss';
import {Content, Header} from "./components";

function App() {



    const ClickBuy = () => {
        alert('Coming...')
    };

    return (
        <div>
            <div className="wrapper">
                <Header ClickBuy={ClickBuy}/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
