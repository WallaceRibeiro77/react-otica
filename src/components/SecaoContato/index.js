import Local from '../../assets/local.png';
import Telefone from '../../assets/telefone.png';
import Email from '../../assets/email.png';
import FB from '../../assets/fb.png';
import IG from '../../assets/ig.png';
import TT from '../../assets/tt.png';

export default function SecaoContato() {
  return (
    <section id="contato" className='secao-contato'>
        <div className='limitar-secao'>
            <h3>fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossos lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            <div className='container-box'>
                <div className='container-conteudo'>
                    <h4>Contato</h4>
                    <div>
                        <img src={Local} alt="Ícone local" title="Pino de localização"/>
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div>
                        <img src={Telefone} alt="Ícone telefone" title="Ícone de um telefone"/>
                        <span>(21) 9999-9999</span>
                    </div>
                    <div>
                        <img src={Email} alt="Ícone email" title="Ícone de uma carta"/>
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div className='container-conteudo'>
                    <h4>Nossas Redes Sociais</h4>
                    <div>
                        <img src={FB} alt="Ícone facebook" title="logo do facebook"/>
                        <span>/OticaVida</span>
                    </div>
                    <div>
                        <img src={IG} alt="Ícone instagram" title="logo do instagram"/>
                        <span>@oticavidarj</span>
                    </div>
                    <div>
                        <img src={TT} alt="Ícone twitter" title="logo do twitter"/>
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
