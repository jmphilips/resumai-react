import { Container, SimpleGrid } from '@mantine/core'
import Button from './Button';

interface Workflow {
  name: string;
}

interface HomeProps {
  name: string;
  workflows: Workflow[];
  setWorkflow: (name: string) => void;
}


export default function Home(props: HomeProps) {
  const { name, workflows, setWorkflow } = props;
  return (
    <Container size="sm">
      <SimpleGrid cols={1} spacing="sm">
      <p>{name}</p>
      <div>
        {workflows.map(workflow => {
          return (
            <Button key={workflow.name} onClick={() => setWorkflow(workflow.name)} text={workflow.name} />
          )
        })}
      </div>
      </SimpleGrid>
    </Container>
  );
}
