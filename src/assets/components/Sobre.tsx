import "./css/Sobre.css"

import { useNavigate } from "react-router-dom"


function Sobre(){
     const navigate = useNavigate() 
  return (

    <div className="sobre-container">

      <h1 className="titulo">Desenvolvedores</h1>

      <div className="grid">

        {/* CARD 1 */}
        <div className="card">
          <div className="avatar-circle">F</div>
      
          <h2>Frederico Abrantes</h2>

          <p className="info">
            Sou estudante da FAETEC de Volta Redonda e tenho 18 anos. Atualmente estou no 3º ano do Ensino Médio, cursando o curso de Informática para Internet. 
          </p>

          <p className="info">
          Tenho paixão por tecnologia e estou sempre buscando aprender mais sobre desenvolvimento web e outras áreas relacionadas.
          </p>

          <p className="skills">
            React • Java • HTML • CSS
          </p>

        </div>

    {/* CARD 2 */}
        <div className="card">
          <div className="avatar-circle">N</div>
      
          <h2>Nícolas Camargo</h2>

          <p className="info">
            Sou estudante da FAETEC de Volta Redonda e tenho 17 anos. Atualmente estou no 3º ano do Ensino Médio, cursando o curso de Informática para Internet. 
          </p>

          <p className="info">
            Me esforço sempre para me aprofundar cada vez mais no mundo da tecnologia, buscando aprender novas linguagens de programação.
          </p>

          <p className="skills">
            React • Java • HTML • CSS
          </p>
        </div>
</div>
               <button onClick={() => navigate("/")} className="btn" id="sobrebtn">
  Voltar para Home
</button>
</div>
    )
}
  


export default Sobre