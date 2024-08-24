import { useState } from "react";

const Settings = ({ settings, setSettings }) => {
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        [name]: checked,
      };

      if (!newSettings.single && !newSettings.twopart) {
        setIsError(true);
        return prev;
      }

      setIsError(false);
      return newSettings;
    });
  };

  return (
    <form className="min-h-32 p-8 bg-white rounded-lg border-2 border-slate-400">
      <fieldset
        className={`flex justify-center gap-8 p-4 border rounded-lg ${
          isError ? "border-red-500" : "border-slate-400"
        }`}
      >
        <legend>Select at least one joke type:</legend>
        <div className="flex gap-4">
          <input
            type="checkbox"
            id="single"
            name="single"
            checked={settings.single}
            onChange={handleChange}
          />
          <label htmlFor="scales">single</label>
        </div>
        <div className="flex gap-4">
          <input
            type="checkbox"
            id="twopart"
            name="twopart"
            checked={settings.twopart}
            onChange={handleChange}
          />
          <label htmlFor="scales">twopart</label>
        </div>
      </fieldset>
    </form>
  );
};

export default Settings;
