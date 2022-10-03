import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { placeholder, value, defaultValue, onChange, autoFocus, type, id } =
    props;
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      autoFocus={autoFocus}
      type={type}
      className="form-control"
    />
  );
};

export default InputField;
