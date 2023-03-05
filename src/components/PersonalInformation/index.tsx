import"./style.css"
import img from "../../assets/img.png";
import img_github from "../../assets/img_github_64.png"
import img_linkendin from "../../assets/img_linkendin_64.png"


export function PersonalInformation() {
  return (
    <main className="body_data">
      <div className="dados_principal">
        <img className="img_principal" src={img} alt="/" />
        <p className="name">Paulo César</p>
      </div>
      <details className="accordion_dados">
        <summary className="title_dados">Informações Pessoais</summary>
        <div className="dados_secundarios">
            <p className="date">Data de Nascimento:<br/> 28/04/2005</p>
            <p className="telefone">Telefone:<br/> (81) 9 8878-1531</p>
            <p className="email">E-mail:<br/> paulocesar147852@gmail.com</p>
            <a className="img_github" href="https://github.com/P1ul0"><img src={img_github}></img></a>
            <a className="img_linkendin" href="https://www.linkedin.com/in/paulo-c%C3%A9sar-a3b787234/"><img src={img_linkendin}></img></a>
        </div>
      </details>
    </main>
  );
}
