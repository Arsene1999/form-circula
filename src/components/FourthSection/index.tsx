import { UseFormRegister } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { FormData } from "./../../types/index";
import "./styles.scss";

type FourthSectionProp = {
  register: UseFormRegister<FormData>;
};

function FourthSection({ register }: FourthSectionProp) {
  return (
    <>
      <h5 className="subTitle">Quantidade de tempo para cada ensaio</h5>
      <p className="subSubTitle">
        Por favor insira a quantidade de tempo para cada ensaio em horas
      </p>
      <div className="gridInput">
        <div>
          <InputLabel text={"Ensaio 1"} {...register("qte_dias.qtd_horas_1")} />
          <InputLabel text={"Ensaio 2"} {...register("qte_dias.qtd_horas_2")} />
          <InputLabel text={"Ensaio 3"} {...register("qte_dias.qtd_horas_3")} />
          <InputLabel text={"Ensaio 4"} {...register("qte_dias.qtd_horas_4")} />
          <InputLabel text={"Ensaio 5"} {...register("qte_dias.qtd_horas_5")} />
        </div>
        <div>
          <InputLabel text={"Ensaio 6"} {...register("qte_dias.qtd_horas_6")} />
          <InputLabel text={"Ensaio 7"} {...register("qte_dias.qtd_horas_7")} />
          <InputLabel text={"Ensaio 8"} {...register("qte_dias.qtd_horas_8")} />
          <InputLabel text={"Ensaio 9"} {...register("qte_dias.qtd_horas_9")} />
          <InputLabel
            text={"Ensaio 10"}
            {...register("qte_dias.qtd_horas_10")}
          />
        </div>
      </div>
    </>
  );
}

export default FourthSection;
