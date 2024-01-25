interface TestProps {
  title: string;
  text: string;
}

export const Test = (props: TestProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};
