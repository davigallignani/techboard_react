import './card-evento.style.css'

export function CardEvento({evento}){
    return(
        <div className='card-evento'>
            <img src={evento.capa} alt="" />
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema.nome}
                </p>
                <p className='data'>
                    {evento.data.toLocaleDateString('PT-br')}
                </p>
                <h4 className='titulo'>
                    {evento.titulo}
                </h4>
            </div>
        </div>
    )
}