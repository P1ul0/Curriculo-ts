import { useEffect, useState } from "react";
import { api } from "../../Api/Api";
import "./style.css"

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
    <>
      {repository.map((repository) => {
        return (
          <div>
            <h3>{repository.name}</h3>
            <button>
              <a href={repository.html_url}>
              Saiba Mais
              </a>
            </button>
          </div>
        );
      })}
    </>
  );
}
