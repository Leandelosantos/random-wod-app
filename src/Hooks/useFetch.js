import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [wod, setWod] = useState({
    nameExercise: "",
    type: "",
    equipment: "",
    instructions: "",
  });

  const getExercise = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7d6e2da24bmsh60b57f855290610p1e8115jsne1332cec514b",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      };
      const resp = await fetch(url, options);
      const data = await resp.json();
      const { name, type, equipment, instructions } = data[0];

      setWod({
        nameExercise: name,
        type: type,
        equipment: equipment,
        instructions: instructions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const resp = await fetch(url, options);
  // const data = await resp.json();

  // const { name, type, equipment, instructions } = data[0];
  //console.log(wod);

  useEffect(() => {
    getExercise();
  }, [url]);

  return { wod };
};
