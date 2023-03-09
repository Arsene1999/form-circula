import * as React from "react";
import {  useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.scss";

function Secundary() {
    const navigate = useNavigate();
  return (
    <div className="secundaryCss">
      <div>
        <h3>Solicitação enviada com sucesso</h3>
        <p>
          Sua solicitação de ensaios foi salva e enviada para o banco de dados
        </p>
        <Button text={"Criar nova solicitação"} onClick={() => navigate("/")} />
      </div>
    </div>
  );
}

export default Secundary;
