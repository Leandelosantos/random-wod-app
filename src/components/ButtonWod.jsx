import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Wod } from "./Wod";
import option from "../../options.jsx";

export const ButtonWod = () => {
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

      const longitudArray = option.muscle.length;
      const indiceAleatorio = Math.floor(Math.random() * longitudArray);
      const valorAleatorio = option.muscle[indiceAleatorio];
      console.log(valorAleatorio);

      const resp = await fetch(
        `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${valorAleatorio}&offset=1`,
        options
      );
      const data = await resp.json();
      const { name, type, equipment, instructions } =
        data[Math.floor(Math.random() * data.length)];
      console.log(data);

      setWod({
        nameExercise: name,
        type: type,
        equipment: equipment,
        instructions: instructions,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExercise();
  }, []);

  return (
    <>
      <Button
        style={{ backgroundColor: "#f57c00" }}
        variant="contained"
        onClick={getExercise}
      >
        Wod
      </Button>

      {}
      <div className="wodContainer">
        <p>{wod.nameExercise}</p>
        <p>{wod.type}</p>
        <p>{wod.equipment}</p>
        <p>{wod.instructions}</p>
      </div>
    </>
  );
};
