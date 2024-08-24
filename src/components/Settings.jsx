const Settings = ({ settings, setSettings }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowJokes(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-32 p-8 bg-white rounded-lg border-2 border-slate-400"
    >
      <fieldset className="flex justify-center gap-8 border border-slate-400 rounded-lg p-4">
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
