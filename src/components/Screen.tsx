interface ComponentProps {
  type: string;
}

interface ScreenProps {
  name: String;
  components: ComponentProps[];
}

export default function Screen({ name }: ScreenProps) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
