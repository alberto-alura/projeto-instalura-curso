import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div id="root">
      <div className="main">

        <header className="header container">
          <h1 className="header-logo">
            Instalura
          </h1>

          <form className="header-busca">
            <input type="text" name="search" placeholder="Pesquisa" className="header-busca-campo"/>
            <input type="submit" value="Buscar" className="header-busca-submit"/>
          </form>


          <nav>
            <ul className="header-nav">
              <li className="header-nav-item">
                <a href="#">
                  ♡
                  {/*                 ♥ */}
                  {/* Quem deu like nas minhas fotos */}
                </a>
              </li>
            </ul>
          </nav>
        </header>




        <div className="fotos container">
          <div className="foto">
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-19/11199408_569104449895751_1837574990_a.jpg" alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>

            <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2"/>

            <div className="foto-info">
              <div className="foto-info-likes">

                <a href="#">
                  alots_ssa
                </a>

                ,

                <a href="#">
                  rafael_rollo
                </a> 

                 curtiram
             
              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, illo?
              </p>

              <ul className="foto-info-comentarios">
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque earum molestias voluptatem modi nihil sit magnam ratione eveniet distinctio magni error asperiores dignissimos tempora expedita, laborum ex soluta hic maiores veritatis deserunt.
                </li>
                <li className="comentario">
                  <a className="foto-info-autor">seguidor </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laudantium quae ab fuga odio delectus maiores voluptatibus sit commodi quidem.
                </li>
              </ul>
            </div>


            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default App;
