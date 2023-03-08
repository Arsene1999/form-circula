import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./../../dataType";
import "./styles.css";
type ThirdSectionProp = {
  register: UseFormRegister<FormData>;
};

function ThirdSection({ register }: ThirdSectionProp) {
  const [others, setOthers] = useState(true);

  return (
    <div>
      <h3>Ensaios solicitados:</h3>
      <div>
        <div>
          <label className="labelCSS">
            Análise Granulométrica a Laser
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_analise_granulometrica_laser"
              )}
            />
          </label>
          <label className="labelCSS">
            Índice de Finura{" "}
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_indice_finura")}
            />
          </label>
          <label className="labelCSS">
            Massa Específica por Picnometria a He
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_massa_especifica_picnometria_he"
              )}
            />
          </label>
          <label className="labelCSS">
            Blaine
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_blaine")}
            />
          </label>
          <label className="labelCSS">
            BET
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_bet")}
            />
          </label>
          <label className="labelCSS">
            Tempo de Pega
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_tempo_pega")}
            />
          </label>
          <label className="labelCSS">
            Calorimetria{" "}
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_calorimetria")}
            />
          </label>
          <label className="labelCSS">
            Resistência à Compressão - Cilíndrico{" "}
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_resistencia_compressao_cilindrico"
              )}
            />
          </label>
          <label className="labelCSS">
            Resistência à Compressão - Prismático
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_resistencia_compressao_prismatico"
              )}
            />
          </label>
          <label className="labelCSS">
            Expansibilidade por Autoclave
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_expansibilidade_autoclave")}
            />
          </label>
          <label className="labelCSS">
            Expansibilidade de Le Chatelier a Quente
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_expansibilidade_le_chatelier_quente"
              )}
            />
          </label>
        </div>
        <div>
          <label className="labelCSS">
            Expansibilidade de Le Chatelier a Frio
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_expansibilidade_le_chatelier_frio"
              )}
            />
          </label>
          <label className="labelCSS">
            DRX
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_drx")}
            />
          </label>
          <label className="labelCSS">
            FRX
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_frx")}
            />
          </label>
          <label className="labelCSS">
            FTIR
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_ftir")}
            />
          </label>
          <label className="labelCSS">
            ICP
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_icp")}
            />
          </label>
          <label className="labelCSS">
            Análise Termogravimétrica
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_analise_termogravimetrica")}
            />
          </label>
          <label className="labelCSS">
            Microscopia Eletônica de Varredura
            <input
              type="checkbox"
              className="inputCSS"
              {...register(
                "ensaios_solicitados.fl_microscopia_eletronica_varredura"
              )}
            />
          </label>
          <label className="labelCSS">
            Microscopia Estereoscópica
            <input
              type="checkbox"
              className="inputCSS"
              {...register("ensaios_solicitados.fl_microscopia_estereoscopica")}
            />
          </label>
          <label className="labelCSS">
            Outros{" "}
            <input
              type="checkbox"
              className="inputCSS"
              onChange={() => setOthers((previous) => !previous)}
            />
            <label>Outros ensaios:</label>
            <input
              type="text"
              {...register("ensaios_solicitados.fl_outros")}
              disabled={others}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
