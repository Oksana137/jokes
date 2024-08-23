import { useState } from "react";
import "./App.css";
import JokesList from "./components/JokesList";
import Settings from "./components/Settings";

function App() {
  const [settings, setSettings] = useState({
    single: true,
    twopart: true,
  });

  return (
    <>
      <div className="flex flex-col items-center gap-8 min-h-screen py-8 bg-slate-200">
        <Settings
          settings={settings}
          setSettings={setSettings}
        />
        <JokesList settings={settings} />
      </div>
    </>
  );
}

export default App;
