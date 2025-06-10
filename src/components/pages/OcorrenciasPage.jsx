import React from 'react';
import CampoLabelInput from "../molecules/CampoLabelInput";
import CampoLabelSelect from "../molecules/CampoLabelSelect";
import './OcorrenciasPage.css';
import { useNavigate } from "react-router-dom";


const setores = [{ value: "adm", label: "Administrativo" }, { value: "producao", label: "Produção" }];
const locais = [{ value: "galpao1", label: "Galpão 1" }, { value: "galpao2", label: "Galpão 2" }];
const causas = [{ value: "equip", label: "Falha de Equipamento" }];
const regimes = [{ value: "normal", label: "Normal" }, { value: "extra", label: "Extra" }];
const ocorrencias = [{ value: "parada", label: "Parada de Produção" }];
const prOptions = [{ value: "pre", label: "Prevenção" }, { value: "rec", label: "Recorrência" }];

const OcorrenciasPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ocorrencias-container">
      <div className="ocorrencias-header">
        <h3 className="ocorrencias-header-subtitle">Blindagem de Segurança Industrial</h3>
        <h2 className="ocorrencias-header-title">CONTROLE DE PERDAS</h2>
      </div>
      <h4 className="ocorrencias-form-title">Registro de Ocorrências</h4>
      <form className="ocorrencias-form">

        {/* Linha 1: RO, Verificar, Revisão */}
        <div className="form-row">
          <CampoLabelInput label="Informe o número do RO:" name="ro" width={40} />
          <button type="button" className="verificar-btn">Verificar</button>
          <CampoLabelInput label="Revisão:" name="revisao" width={60} />
        </div>

        {/* Linha 2: Ocorrência, P/R, Causa */}
        <div className="form-row">
          <CampoLabelSelect label="Ocorrência:" name="ocorrencia" options={ocorrencias} />
        </div>
        <div className="form-row">
          <CampoLabelSelect label="Causa:" name="causa" options={causas} />
        </div>

        {/* Linha 3: Setor, Local, Data Ocorr. */}
        <div className="form-row">
          <CampoLabelSelect label="Setor:" name="setor" options={setores} />
          <CampoLabelSelect label="P/R:" name="pr" options={prOptions} />
        </div>

        <div className="form-row">
          <CampoLabelSelect label="Local:" name="local" options={locais} />
          <CampoLabelInput label="Data Ocorrencia" type="date" name="dataOcorrencia" width={20} />
        </div>
 
        {/* Linha 4: Hora, Equipamento, Detalhe */}
        <div className="form-row">         
          <CampoLabelInput label="Equipamento:" name="equipamento" width={180} />
          <CampoLabelInput label="Hora:" type="time" name="horaOcorrencia" width={100} />       
        </div>
                <div className="form-row">         

        <CampoLabelInput label="Detalhe:" name="detalhe" width={300} />
        </div>
                <div className="form-row">         

         <CampoLabelInput label="Duração (H):" type="number" name="duracao" width={90} />
         </div>
        {/* Linha 5: Duração, Regime, Dia Semana */}
        <div className="form-row">         
          <CampoLabelSelect label="Regime:" name="regime" options={regimes} />
          <CampoLabelInput label="Dia Semana:" name="diaSemana" width={110} />
        </div>

        {/* Linha 6: Perdas, Data Emissão */}
        <div className="form-row">
          <CampoLabelInput label="Perdas:" type="number" name="perdas" width={100} />
          <CampoLabelInput label="Data Emissão:" type="date" name="dataEmissao" width={130} />
        </div>

       Abrangência da Ocorrência (Setores/Pessoas Envolvidas)
       

        {/* Linha 8: Checkboxes (única linha) */}
        <div className="form-row checkbox-row single-field-row">
        
           Na Ocorrência           <button type="button" className="verificar-btn">Editar Lista</button>

       
          <label className="checkbox-label">
            <input type="checkbox" /> Na Análise
          </label>
        </div>

        {/* Botões */}
        <div className="botoes-container">
          <button
            type="button"
            className="btn secondary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Voltar
          </button>
          <button type="submit" className="btn primary-btn">Incluir</button>
          <button type="button" className="btn primary-btn">Alterar</button>
          <button type="button" className="btn primary-btn">Excluir</button>
          <button type="button" className="btn primary-btn">Descrições</button>
        </div>
      </form>
    </div>
  );
};

export default OcorrenciasPage;