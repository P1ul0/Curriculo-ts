import { useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import { api } from "../../Api/Api";

export function Repository() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const getRepository = async () => {
    await api.get("").then((response) => setRepositories(response.data));
  };

  useEffect(() => {
    getRepository();
  });

  const r = repositories.filter(
    (repository) =>
      repository.name === "api-carros" ||
      repository.name === "Curriculo-React.js" ||
      repository.name === "Calculadora"
  );

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Repositórios</Accordion.Header>
          <Accordion.Body>
            {r.map((repository) => {
              return (
                <div>
                  <h3>{repository.name}</h3>
                  <Button
                    variant="success"
                    size="sm"
                    href={repository.html_url}
                  >
                    Saiba Mais
                  </Button>
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
