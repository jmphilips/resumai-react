import { Button as MantineButton } from "@mantine/core";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return <MantineButton onClick={onClick}>{text}</MantineButton>;
}
