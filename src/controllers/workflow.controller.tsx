import { useQuery, gql } from "@apollo/client";
import ComponentRenderer from "../components/ComponentRenderer";

const FIND_WORKFLOW = gql`
  query Workflow($name: String!) {
    workflow(name: $name) {
      name
      title
      screens {
        name
        components {
          type
          text
        }
      }
    }
  }
`;

interface WorkflowProps {
  name: string;
}

interface ScreenProps {
  name: string;
  components: ComponentProps[];
}

interface ComponentProps {
  type: string;
}

function Screen({ name, components }: ScreenProps) {
  return (
    <div>
      <h1>{name}</h1>
      {components.map((component) => {
        return (
          <div>
            <ComponentRenderer {...component} />
          </div>
        );
      })}
    </div>
  );
}

export default function WorkflowController({ name }: WorkflowProps) {
  const { data, loading, error } = useQuery(FIND_WORKFLOW, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div className="grid grid-cols-1">
      <h1>{data.workflow.title}</h1>
      {data.workflow.screens.map((screen) => {
        return <Screen {...screen} />;
      })}
    </div>
  );
}
