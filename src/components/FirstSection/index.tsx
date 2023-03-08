import { useForm, UseFormRegister } from "react-hook-form";
import { FormData } from "./../../dataType";

type FirstSectionProp = {
  register: UseFormRegister<FormData>;
};

function FirstSection({ register }: FirstSectionProp) {
  return (
    <>
      <h3>Dados do solicitante</h3>
      <label>Nome do Solicitante:</label>
      <input {...register("nome_solicitante")} />
      <label>Código da Formulação:</label>
      <input {...register("codigo_formulacao")} />
      <label>Ponto de Controle:</label>
      <input {...register("des_ponto_controle")} />
      <label>Projeto:</label>
      <input {...register("des_projeto")} />
      <label>Observações:</label>
      <input {...register("des_observacoes")} />
    </>
  );
}

export default FirstSection;
