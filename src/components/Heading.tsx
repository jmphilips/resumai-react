interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
