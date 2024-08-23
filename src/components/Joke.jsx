import { useState } from "react";

const Joke = ({ joke }) => {
  const [showDelivery, setShowDelivery] = useState(false);
  const twoPartJoke = joke.type === "twopart";

  return (
    <div className="flex flex-col items-center w-full gap-4 min-h-32 p-8 bg-white rounded-lg border-2 border-slate-400">
      <p>{twoPartJoke ? joke.setup : joke.joke}</p>
      {twoPartJoke && showDelivery && <p>{joke.delivery}</p>}
      {twoPartJoke && (
        <button
          className="py-2 px-4 rounded-lg border-2 border-slate-400 text-[#cda01f]"
          onClick={() => setShowDelivery(!showDelivery)}
        >
          {showDelivery ? "Hide Delivery" : "Show Delivery"}
        </button>
      )}
    </div>
  );
};

export default Joke;

