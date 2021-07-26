import './scss/app.scss';
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div >
      <div className="wrapper">
        <Header/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
