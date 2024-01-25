import { useState } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  onTaskChange: (task: string) => void;
}

export const EditInput = (props: InputProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <input
      placeholder={props.placeholder}
      name={props.name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onTaskChange(e.target.value);
      }}
    />
  );
};
