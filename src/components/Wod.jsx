//import { useFetch } from "../Hooks/useFetch";

export const Wod = ({ nameExercise, type, equipment, instructions }) => {
  /* const { wod } = useFetch(
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=olympic_weightlifting&difficulty=intermediate"
  );

  const { nameExercise, type, equipment, instructions } = wod; */

  return (
    <div className="wodContainer">
      <p>{nameExercise}</p>
      <p>{type}</p>
      <p>{equipment}</p>
      <p>{instructions}</p>
    </div>
  );
};
