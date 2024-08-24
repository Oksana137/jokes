import { useEffect, useState } from "react";
import Joke from "./Joke";

const JokesList = ({ settings }) => {
  const [jokesList, setJokesList] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const getPath = () => {
      if (!settings.single && !settings.twopart) {
        return false;
      }

      let options = {
        lang: "de",
        blacklistFlags: [
          "nsfw",
          "religious",
          "political",
          "racist",
          "sexist",
          "explicit",
        ],
        amount: 10,
        type: 'null'
      };
      
      if (settings.single && !settings.twopart) {
        options.type = "single";
      } else if (!settings.single && settings.twopart) {
        options.type = "twopart";
      }

      let params = new URLSearchParams();
      params.append("lang", options.lang);
      params.append("blacklistFlags", options.blacklistFlags.join(","));
      params.append("amount", options.amount);
      params.append("type", options.type);
      let queryString = params.toString();

      let path = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?${queryString}`;

      console.log(path);

      return path;
    };

    const fetchJokes = async () => {
      try {
        const path = getPath();
        if (!path) throw new Error("Invalid Settings Detected");

        const response = await fetch(path);
        if (!response.ok) throw new Error("Fetch error");
        const data = await response.json();
        const jokes = !data.error ? data.jokes : [];
        setJokesList(jokes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJokes();
    return () => {
      controller.abort();
    };
  }, [settings]);

  return (
    <div className="flex flex-col gap-8">
      {jokesList && jokesList.map((joke) => <Joke key={joke.id} joke={joke} />)}
    </div>
  );
};

export default JokesList;
