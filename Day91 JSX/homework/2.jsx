import { useState } from "react";

function App() {
  return (
    <div>
      <ToggleContainer />
    </div>
  );
}
function ToggleContainer() {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h2>Toggle Container</h2>
      <ToggleView isOn={isOn} onToggle={toggle} />
    </div>
  );
}
function ToggleView({ isOn, onToggle }) {
  return (
    <div>

      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={onToggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;