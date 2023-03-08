import * as React from "react";
import { useForm } from "react-hook-form";
import FirstSection from "./components/FirstSection";
import FourthSection from "./components/FourthSection";
import SelectSection from "./components/SelectSection";
import ThirdSection from "./components/ThirdSection";
import { FormData } from "./dataType";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <h4 className="title">Solicitação de ensaios</h4>
      <FirstSection register={register} />
      <SelectSection register={register} />
      <ThirdSection register={register} />
      <FourthSection register={register} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
