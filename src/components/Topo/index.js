import Logo from '../../assets/logo.png';

export default function Topo() {
  return (
    <header>
        <div className='limitar-secao topo'>
            <img className='topo-img' src={Logo} alt="imagem de um óculos à direita e o nome da ótica à esquerda" title="logotipo da empresa" />
              <nav>
                <a className='topo-links' href="#produtos">PRODUTOS</a>
                <a className='topo-links' href="#sobre">SOBRE</a>
                <a className='topo-links' href="#contato">CONTATO</a>
              </nav>
        </div>
    </header>
  )
}
