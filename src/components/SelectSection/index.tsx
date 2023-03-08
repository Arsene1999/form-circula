import { UseFormRegister } from "react-hook-form";
import { FormData } from "./../../dataType";

type SelectSectionProp = {
  register: UseFormRegister<FormData>;
};

function SelectSection({ register }: SelectSectionProp) {
  return (
    <>
      <h3>Tipo do Ensaio</h3>
      <h5 style={{ color: "white" }}>Qual é o tipo do ensaio?</h5>
      <select {...register("tipo_ensaio")}>
        <option value="">Selecione uma opção</option>
        <option value="Desenvolvimento">Desenvolvimento</option>
        <option value="Produção">Produção</option>
      </select>
    </>
  );
}

export default SelectSection;
