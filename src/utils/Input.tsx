import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";

type TFormInput<TFieldValue extends FieldValues> = {
  type?: string;
  name: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  placeholder: string;
  errors: {
    required: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
};
const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};
const Input = <TFieldValue extends FieldValues>({
  type = "text",
  name,
  register,
  placeholder,
  errors,
}: TFormInput<TFieldValue>) => {
  return (
    <motion.input
      variants={item}
      type={type}
      placeholder={placeholder}
      {...register(name, errors)}
      className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
    />
  );
};

export default Input;
