import * as React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      "POST",
      "https://s6s2ykxn92.execute-api.us-east-1.amazonaws.com/form-test/"
    );
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200) {
          console.log("successful");
          //document.getElementById("contact-form").innerHTML = "<h1>O responsável será avisado sobre a Ordem de Serviço solicitada. Obrigado.</h1>";
        } else {
          console.log("failed");
        }
      }
    };
  });
  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={onSubmit}>
        <h4 className="title">Solicitação de ensaios</h4>
        <FirstSection register={register} />
        <SelectSection register={register} />
        <ThirdSection register={register} />
        <FourthSection register={register} />
        <FifthSection register={register} />
        <Button
          text={"Enviar solicitação"}
          onClick={() => navigate("/secundary")}
        />
      </form>
    </>
  );
}

export default Principal;
