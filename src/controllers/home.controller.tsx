import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { SimpleGrid } from "@mantine/core";
import Button from "../components/Button";
import WorkflowController from "./workflow.controller";
import { Container } from "@mantine/core";

const HOME_WORKFLOW = gql`
  query HomeWorkflow {
    workflows {
      name
      screens {
        name
        components {
          type
        }
      }
    }
  }
`;

function HomeController() {
  const { data, loading, error } = useQuery(HOME_WORKFLOW);
  const [currentWorkflow, setCurrentWorkflow] = useState("Select");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <Container size="sm">
      <SimpleGrid cols={1} spacing="sm">
        {currentWorkflow === "Select" && (
          <div>
            {data.workflows.map(({ name }) => {
              return (
                <Button
                  key={name}
                  onClick={() => setCurrentWorkflow(name)}
                  text={name}
                />
              );
            })}
          </div>
        )}
        {currentWorkflow !== "Select" && (
          <WorkflowController name={currentWorkflow} />
        )}
      </SimpleGrid>
    </Container>
  );
}

export default HomeController;
