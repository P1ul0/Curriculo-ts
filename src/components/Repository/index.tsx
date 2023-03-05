import { useEffect, useState } from "react";
import { api } from "../../Api/Api";
import "./style.css";

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
      repository.name === "Calculadora"
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
                  <a className="link_repository" href={repository.html_url}>
                    Saiba Mais
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </details>
    </main>
  );
}
