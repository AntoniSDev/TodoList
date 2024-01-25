interface ButtonProps {
  onClick: () => void;
  label: string;
  backgroundColor: string;
}

export const EditButton = (props: ButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.label}
      </button>
    </>
  );
};
