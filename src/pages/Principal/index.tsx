import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import FifthSection from "../../components/FifthSection";
import FirstSection from "../../components/FirstSection";
import FourthSection from "../../components/FourthSection";
import SelectSection from "../../components/SelectSection";
import ThirdSection from "../../components/ThirdSection";
import { FormData } from "./../../types/index";

function Principal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit}>
        <h4 className="title">Solicitação de ensaios</h4>
        <FirstSection register={register} />
        <SelectSection register={register} />
        <ThirdSection register={register} />
        <FourthSection register={register} />
        <FifthSection register={register} />
        <Button text={"Enviar solicitação"} />
      </form>
    </>
  );
}

export default Principal;