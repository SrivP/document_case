import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="App">
        <section className="hero" style={{ position: "relative", zIndex: 1 }}>
          <p className="hero-text">Hi! My name is</p>
          <p className="hero-text">Srivathsan</p>
        </section>
      </div>
      <Nav />
    </>
  );
}

export default App;
