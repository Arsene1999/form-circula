import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./../../dataType";

type FourthSectionProp = {
  register: UseFormRegister<FormData>;
};

function FourthSection({ register }: FourthSectionProp) {
  const [size, setSize] = useState(1);

  const renderInput = () => {
    let inputs = [];
    for (let i = 0; i < size; i++)
      inputs.push(
        <div key={i}>
          <label>Ensaio {i + 1} - Tempo em horas:</label>
          <input type="number" {...register(`qte_dias.${i}`)} />
        </div>
      );

    return inputs;
  };

  return (
    <>
      <h5 className="subTitle">Quantidade de tempo para cada ensaio</h5>
      {renderInput()}
      <a onClick={() => setSize((previous) => previous + 1)}>Adicionar Campo</a>
    </>
  );
}

export default FourthSection;
