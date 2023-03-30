import { useEffect, useState } from "react";
import { api } from "../../Api/Api";
import "./style.css";
import img from "../../assets/img_github_64.png"

export function Repository() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const getRepository = async () => {
    await api.get("").then((response) => setRepositories(response.data));
  };

  useEffect(() => {
    getRepository();
  });

  const repository = repositories.filter(
    (repository) =>
      repository.name === "api-carros" ||
      repository.name === "agendatarefa" ||
      repository.name === "ecommerce"
  );

  return (
    <main className="body_center">
      <details className="accordion">
        <summary className="title">Repositórios</summary>
        <div className="body_pages">
          {repository.map((repository) => {
            return (
              <div className="body_repository">
                <h3 className="name_repository">{repository.name}</h3>
                <button className="btn_repository">
                  <a
                    className="link_repository"
                    href={repository.html_url}
                    target="_blank"
                  >
                    Saiba Mais
                  </a>
                </button>
                {repository.name === "agendatarefa"  ?
                 <a className="img_github"href="https://p1ul0.github.io/agendatarefa/" target="_blank">
                   <img src={img} alt="" />
                 </a>:
               <></>
              }
                {repository.name === "ecommerce"  ?
                 <a className="img_github"href="https://p1ul0.github.io/ecommerce/" target="_blank">
                   <img src={img} alt="" />
                 </a>
               :
               <></>
              }
              </div>
            );
          })}
        </div>
      </details>
    </main>
  );
}
