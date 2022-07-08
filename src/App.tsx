import Counter from "./components/Counter";
import Formulario from "./components/Formulario";
import TimesPadre from "./components/TimesPadre";

import UserLogin from "./components/UserLogin";


function App() {
  return (
    <div className="App">
      <Formulario />
      <br></br>
      <br />
      <h1>Hola</h1>
      <Counter />
      <br></br>
      <br />
      <UserLogin />

      <br></br>
      <br />
      <TimesPadre />
    </div>
  );
}

export default App;
