import React from "react";

interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return <button style={{ backgroundColor: "hotpink" }}>{children}</button>;
};

export default Button;
