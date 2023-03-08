import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { InputCheckbox } from "../InputCheckbox";
import { InputLabel } from "../InputLabel";
import { FormData } from "./../../types/index";
import "./styles.scss";

type ThirdSectionProp = {
  register: UseFormRegister<FormData>;
};

function ThirdSection({ register }: ThirdSectionProp) {
  const [others, setOthers] = useState(false);

  return (
    <div>
      <h5 className="subTitle">Ensaios solicitados:</h5>
      <div className="gridCheckbox">
        <InputCheckbox
          text={"Análise Granulométrica a Laser"}
          {...register("ensaios_solicitados.fl_analise_granulometrica_laser")}
        />
        <InputCheckbox
          text={"Índice de Finura"}
          {...register("ensaios_solicitados.fl_indice_finura")}
        />
        <InputCheckbox
          text={"Massa Específica por Picnometria a He"}
          {...register(
            "ensaios_solicitados.fl_massa_especifica_picnometria_he"
          )}
        />
        <InputCheckbox
          text={"Blaine"}
          {...register("ensaios_solicitados.fl_blaine")}
        />
        <InputCheckbox
          text={"BET"}
          {...register("ensaios_solicitados.fl_bet")}
        />
        <InputCheckbox
          text={"Tempo de Pega"}
          {...register("ensaios_solicitados.fl_tempo_pega")}
        />
        <InputCheckbox
          text={"Calorimetria"}
          {...register("ensaios_solicitados.fl_calorimetria")}
        />
        <InputCheckbox
          text={"Resistência à Compressão - Cilíndrico"}
          {...register(
            "ensaios_solicitados.fl_resistencia_compressao_cilindrico"
          )}
        />
        <InputCheckbox
          text={"Resistência à Compressão - Prismático"}
          {...register(
            "ensaios_solicitados.fl_resistencia_compressao_prismatico"
          )}
        />
        <InputCheckbox
          text={"Expansibilidade por Autoclave"}
          {...register("ensaios_solicitados.fl_expansibilidade_autoclave")}
        />
        <InputCheckbox
          text={"Expansibilidade de Le Chatelier a Quente"}
          {...register(
            "ensaios_solicitados.fl_expansibilidade_le_chatelier_quente"
          )}
        />

        <InputCheckbox
          text={"Expansibilidade de Le Chatelier a Frio"}
          {...register(
            "ensaios_solicitados.fl_expansibilidade_le_chatelier_frio"
          )}
        />
        <InputCheckbox
          text={"DRX"}
          {...register("ensaios_solicitados.fl_drx")}
        />
        <InputCheckbox
          text={"FRX"}
          {...register("ensaios_solicitados.fl_frx")}
        />
        <InputCheckbox
          text={"FTIR"}
          {...register("ensaios_solicitados.fl_ftir")}
        />
        <InputCheckbox
          text={"ICP"}
          {...register("ensaios_solicitados.fl_icp")}
        />
        <InputCheckbox
          text={"Análise Termogravimétrica"}
          {...register("ensaios_solicitados.fl_analise_termogravimetrica")}
        />
        <InputCheckbox
          text={"Microscopia Eletônica de Varredura"}
          {...register(
            "ensaios_solicitados.fl_microscopia_eletronica_varredura"
          )}
        />
        <InputCheckbox
          text={"Microscopia Estereoscópica"}
          {...register("ensaios_solicitados.fl_microscopia_estereoscopica")}
        />

        <label className="labelCSS">
          <input
            type="checkbox"
            className="inputCSS"
            onChange={() => setOthers((previous) => !previous)}
          />
          Outros{" "}
        </label>
      </div>
      {others && (
        <InputLabel
          text={"Outros ensaios:"}
          {...register("ensaios_solicitados.fl_outros")}
        />
      )}
    </div>
  );
}

export default ThirdSection;
