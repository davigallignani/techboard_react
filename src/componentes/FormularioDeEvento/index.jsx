import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoEntrada } from "../CampoEntrada";
import "./formulario-de-evento-style.css";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmitido(formData) {
    const eventos =
      {
        capa: formData.get('capa'),
        tema: temas.find(function (item){
          return item.id == formData.get('tema')
        }),
        data: new Date(formData.get('dataEvento')),
        titulo: formData.get('nomeEvento')
      }
      aoSubmeter(eventos)
  }

  return (
    <form className="form-evento" action={aoFormSubmitido}>
      <TituloFormulario>Preencha para criar um evento</TituloFormulario>
      <div className="campos">


        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento feito?</Label>
          <CampoEntrada
            type="text"
            id="nomeEvento"
            name='nomeEvento'
            placeholder="Summer dev hits"
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="urlEvento">Qual o endereço da imagem da capa?</Label>
          <CampoEntrada type="text" id="capa" name='capa' placeholder="http://..." />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoEntrada
            name='dataEvento'
            type="date"
            id="dataEvento"
            placeholder="Data do evento"
          />
        </CampoDeFormulario>
        <Label htmlFor="listaSuspensa">Tema do evento</Label>
        <ListaSuspensa id="tema" name="tema" itens={temas}></ListaSuspensa>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
