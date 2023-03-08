import { UseFormRegister } from "react-hook-form";
import { FormData } from "./../../dataType";
import "./styles.css";

type SelectSectionProp = {
  register: UseFormRegister<FormData>;
};

function SelectSection({ register }: SelectSectionProp) {
  return (
    <>
      <h5 className="subTitle">Tipo do Ensaio</h5>
      <select className="selectStyle" {...register("tipo_ensaio")}>
        <option value="">Selecione uma opção</option>
        <option value="Desenvolvimento">Desenvolvimento</option>
        <option value="Produção">Produção</option>
      </select>
    </>
  );
}

export default SelectSection;
