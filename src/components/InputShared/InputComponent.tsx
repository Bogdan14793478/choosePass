import React from "react";
import { InputField } from "./styles";
import { InputData } from "./types";

const InputComponent: React.FC<InputData> = ({ formData }) => {
  return (
    <div>
      <InputField
        value={formData.value}
        onChange={(e) => formData.setValue(e.target.value)}
        type="text"
        placeholder="enter your password"
      />
    </div>
  );
};

export default InputComponent;
