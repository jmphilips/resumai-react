import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";

const componentList = {
  Input,
  Heading,
  Button,
};

export default function ComponentRenderer(props) {
  const { type, ...componentProps } = props;
  const Component = componentList[type];
  return (
    <>
      <Component {...componentProps} />
    </>
  );
}
