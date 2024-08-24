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

      let path =
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous?lang=de&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10";

      if (settings.single && !settings.twopart) {
        path += "&type=single";
      } else if (!settings.single && settings.twopart) {
        path += "&type=twopart";
      }

      return path;
    };

    const fetchJokes = async () => {
      try {
        const path = getPath();
        if (!path) throw new Error("Select at least one joke type");

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
