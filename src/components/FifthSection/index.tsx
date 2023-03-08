import { UseFormRegister } from "react-hook-form";
import { InputLabel } from "../InputLabel";
import { FormData } from "./../../types/index";
import "./styles.scss";
import "./../InputCheckbox/styles.scss";
import { useState } from "react";

type FifthSectionProp = {
  register: UseFormRegister<FormData>;
};

function FifthSection({ register }: FifthSectionProp) {
  const [check, setCheck] = useState(false);

  return (
    <>
      <h5 className="subTitle">Lotes utilizados</h5>

      <label className={check ? "labelCheckedCSS" : "labelCSS"}>
        <input
          type="checkbox"
          onClick={() => {
            setCheck((previous) => !previous);
          }}
        />
        Lote não especificado
      </label>
      <div className="gridInput" style={{ paddingTop: "39px" }}>
        <div>
          <InputLabel
            text={"Ativador Principal"}
            {...register("lotes.lote_atv_principal")}
            disabled={check}
          />
          <InputLabel
            text={"Ativador Secundário 1"}
            disabled={check}
            {...register("lotes.lote_atv_secundario_1")}
          />
          <InputLabel
            text={"Ativador Secundário 2"}
            disabled={check}
            {...register("lotes.lote_atv_secundario_2")}
          />
          <InputLabel
            text={"Ativador Secundário 3"}
            disabled={check}
            {...register("lotes.lote_atv_secundario_3")}
          />
          <InputLabel
            text={"Ativador Secundário 4"}
            disabled={check}
            {...register("lotes.lote_atv_secundario_4")}
          />
          <InputLabel
            text={"Precursor Principal"}
            disabled={check}
            {...register("lotes.lote_pre_principal")}
          />
          <InputLabel
            text={"Precursor Secundário 1"}
            disabled={check}
            {...register("lotes.lote_pre_secundario_1")}
          />
          <InputLabel
            text={"Precursor Secundário 2"}
            disabled={check}
            {...register("lotes.lote_pre_secundario_2")}
          />
          <InputLabel
            text={"Precursor Secundário 3"}
            disabled={check}
            {...register("lotes.lote_pre_secundario_3")}
          />
          <InputLabel
            text={"Precursor Secundário 4"}
            disabled={check}
            {...register("lotes.lote_pre_secundario_4")}
          />
        </div>
        <div>
          <InputLabel
            text={"Filler 1"}
            disabled={check}
            {...register("lotes.lote_filler_1")}
          />
          <InputLabel
            text={"Filler 2"}
            disabled={check}
            {...register("lotes.lote_filler_2")}
          />
          <InputLabel
            text={"Filler 3"}
            disabled={check}
            {...register("lotes.lote_filler_3")}
          />
          <InputLabel
            text={"Filler 4"}
            disabled={check}
            {...register("lotes.lote_filler_4")}
          />
          <InputLabel
            text={"Filler 5"}
            disabled={check}
            {...register("lotes.lote_filler_5")}
          />
          <InputLabel
            text={"Aditivo 1"}
            disabled={check}
            {...register("lotes.lote_aditivo_1")}
          />
          <InputLabel
            text={"Aditivo 2"}
            disabled={check}
            {...register("lotes.lote_aditivo_2")}
          />
          <InputLabel
            text={"Aditivo 3"}
            disabled={check}
            {...register("lotes.lote_aditivo_3")}
          />
          <InputLabel
            text={"Aditivo 4"}
            disabled={check}
            {...register("lotes.lote_aditivo_4")}
          />
          <InputLabel
            text={"Aditivo 5"}
            disabled={check}
            {...register("lotes.lote_aditivo_5")}
          />
        </div>
      </div>
      <InputLabel
        text={"Cimento Portland"}
        disabled={check}
        {...register("lotes.lote_cimento_portland")}
      />
    </>
  );
}

export default FifthSection;
