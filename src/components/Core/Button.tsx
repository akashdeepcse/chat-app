import React from "react";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={onClick} className="btn btn-primary w-100 d-block">
      {title}
    </button>
  );
};

export default Button;
