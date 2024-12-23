"use client";

import React from "react";

interface InputProps {
  value?: string;
  onInput?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onInput }: InputProps) => {
  return <input type="text" value={value} onInput={onInput} />;
};

export default Input;
