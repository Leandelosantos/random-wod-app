import React from "react";
import { Button } from "@mui/material";
import { useFetch } from "../Hooks/useFetch";
import { ButtonWod } from "./ButtonWod";
import options from "../../options";

export const Principal = () => {
  /* const { wod } = useFetch(
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=olympic_weightlifting&difficulty=intermediate"
  );

  const { nameExercise, type, equipment, instructions } = wod; */

  return (
    <>
      <div className="main-container">
        <h2>Tap the button to take your Wod</h2>
        <ButtonWod />

        {/* <Button
          style={{ backgroundColor: "#f57c00" }}
          variant="contained"
          onClick={randomWod}
        >
          Wod
        </Button>
        <div className="wodContainer">
          <p>{nameExercise}</p>
          <p>{type}</p>
          <p>{equipment}</p>
          <p>{instructions}</p>
        </div> */}
      </div>
    </>
  );
};
