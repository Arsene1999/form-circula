import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { FormData } from "./../../types/index";
import "./styles.scss";

type FirstSectionProp = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

function FirstSection({ register, errors }: FirstSectionProp) {
  return (
    <>
      <h5 className="subTitle">Dados do solicitante</h5>
      <div className="paddingExceptLast">
        <InputLabel
          text={"Nome do Solicitante"}
          error={errors.nome_solicitante}
          errorMensage={"This field is required"}
          {...register("nome_solicitante", { required: true })}
        />

        <InputLabel
          text={"Código da Formulação"}
          error={errors.codigo_formulacao}
          errorMensage={"This field is required"}
          {...register("codigo_formulacao", { required: true })}
        />
        <InputLabel
          text={"Ponto de Controle"}
          error={errors.des_ponto_controle}
          errorMensage={"This field is required"}
          {...register("des_ponto_controle", { required: true })}
        />
        <InputLabel
          text={"Projeto"}
          error={errors.des_projeto}
          errorMensage={"This field is required"}
          {...register("des_projeto", { required: true })}
        />
        <InputLabel text={"Observações"} {...register("des_observacoes")} />
      </div>
    </>
  );
}

export default FirstSection;
