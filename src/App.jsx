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
      <div className="min-h-screen px-4 py-8 bg-slate-200">
        <div className="flex flex-col gap-8 max-w-3xl m-auto">
          <Settings settings={settings} setSettings={setSettings} />
          <JokesList settings={settings} />
        </div>
      </div>
    </>
  );
}

export default App;
