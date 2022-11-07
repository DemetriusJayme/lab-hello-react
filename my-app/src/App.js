import "./App.css";
import imagem1 from "./assets/ironhack-logo-xs.png";
import imagem2 from "./assets/menu-top-xs.png";
import imagem3 from "./assets/icon1.png";
import imagem4 from "./assets/icon2.png";
import imagem5 from "./assets/icon3.png";
import imagem6 from "./assets/icon4.png";

function App() {
  return (
    <div>
      <div className="top">
        <img src={imagem1} />
        <img src={imagem2} />
      </div>
      <div className="hello">Say hello to</div>
      <div className="reactjs">ReactJS</div>
      <div className="texto">
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer
      </div>
      <div className="botao">
        <button type="button">Awesome!</button>
      </div>
      <div className="botton">
        <div>
          <img src={imagem3} />
          <h2>Declarative</h2>
          <h3>React makes it painless to create interactive UIs.</h3>
        </div>
        <div>
          <img src={imagem4} />
          <h2>Components</h2>
          <h3>Build encasulated components that manage their state.</h3>
        </div>
        <div>
          <img src={imagem5} />
          <h2>Single-Way</h2>
          <h3>A set of immutable values are passed to the component's.</h3>
        </div>
        <div>
          <img src={imagem6} />
          <h2>JSX</h2>
          <h3>Statically-typed, designed to run on modern browsers.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
