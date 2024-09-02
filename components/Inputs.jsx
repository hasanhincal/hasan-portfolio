"use client";

import { Input } from "./ui/input";

const Inputs = ({ type, placeholder }) => {
  return (
    <>
      <Input type={type} placeholder={placeholder} />
    </>
  );
};

export default Inputs;
