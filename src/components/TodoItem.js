import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux/es/exports";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id }) {
  const dispath = useDispatch();

  const handleCheck = () => {
    dispath(setCheck(id));
  };

  return (
    <section>
      {!done ? (
        <div className="bg-[#2c8f7e] p-4 mt-4 flex justify-between items-center rounded-xl">
          <h2 className="font-bold text-xl">{name}</h2>
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
            checked={done}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      ) : (
        <div className="bg-[#801735] p-4 mt-4 flex justify-between items-center rounded-xl">
          <h2 className="text-xl line-through">{name}</h2>
          <Checkbox
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
            checked={done}
            onChange={handleCheck}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      )}
    </section>
  );
}

export default TodoItem;
