export type FormData = {
  nome_solicitante: string;
  codigo_formulacao: string;
  tipo_ensaio: string;
  des_ponto_controle: string;
  des_projeto: string;
  des_observacoes: string;
  data_solicitacao: string;
  ensaios_solicitados: TestsRequested;
  lotes: string;
  qte_dias: string[];
};

export type TestsRequested = {
  fl_analise_granulometrica_laser: boolean;
  fl_indice_finura: boolean;
  fl_massa_especifica_picnometria_he: boolean;
  fl_blaine: boolean;
  fl_bet: boolean;
  fl_tempo_pega: boolean;
  fl_calorimetria: boolean;
  fl_resistencia_compressao_cilindrico: boolean;
  fl_resistencia_compressao_prismatico: boolean;
  fl_expansibilidade_autoclave: boolean;
  fl_expansibilidade_le_chatelier_quente: boolean;
  fl_expansibilidade_le_chatelier_frio: boolean;
  fl_drx: boolean;
  fl_frx: boolean;
  fl_ftir: boolean;
  fl_icp: boolean;
  fl_analise_termogravimetrica: boolean;
  fl_microscopia_eletronica_varredura: boolean;
  fl_microscopia_estereoscopica: boolean;
  fl_outros: boolean;
  des_outros_ensaios: string;
};

// export type HourT = {
//   qtd_horas_1: string;
//   qtd_horas_2: string;
//   qtd_horas_3: string;
//   qtd_horas_4: string;
//   qtd_horas_5: string;
//   qtd_horas_6: string;
//   qtd_horas_7: string;
//   qtd_horas_8: string;
//   qtd_horas_9: string;
//   qtd_horas_10: string;
// };
