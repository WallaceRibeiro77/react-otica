import Atendimento from '../../assets/atendimento.png';
import Loja from '../../assets/loja.png';

export default function SecaoSobre() {
  return (
    <section id="sobre" className='secao-sobre'>
        <div className='limitar-secao texto-sobre'>
            <h3>quem somos nós?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao publico de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            <div className='box-sobre-cards'>
                <img src={Loja} alt="imagem da loja"/>
                <div className='box'>
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                </div>
                <div className='box'>
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                </div>
                <img src={Atendimento} alt="imagem do atendimento"/>
            </div>
        </div>
    </section>
  )
}
