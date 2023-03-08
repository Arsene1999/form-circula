import { UseFormRegister } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { FormData } from "./../../dataType";
import "./styles.scss";

type FirstSectionProp = {
  register: UseFormRegister<FormData>;
};

function FirstSection({ register }: FirstSectionProp) {
  return (
    <>
      <h5 className="subTitle">Dados do solicitante</h5>
      <div className="paddingExceptLast">
        <InputLabel
          text={"Nome do Solicitante"}
          {...register("nome_solicitante", { required: true })}
        />
        <InputLabel
          text={"Código da Formulação"}
          {...register("codigo_formulacao", { required: true })}
        />
        <InputLabel
          text={"Ponto de Controle"}
          {...register("des_ponto_controle", { required: true })}
        />
        <InputLabel
          text={"Projeto"}
          {...register("des_projeto", { required: true })}
        />
        <InputLabel text={"Observações"} {...register("des_observacoes")} />
      </div>
    </>
  );
}

export default FirstSection;
