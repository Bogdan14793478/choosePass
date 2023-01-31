import React, { useEffect, useState } from "react";
import { FieldBlockStyle } from "./styles";
import { FieldProps } from "./types";

const FieldBlock: React.FC<FieldProps> = ({ index, variant }) => {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    let back;
    console.log("useeff work");
    if (variant > 2) {
      setColor("green");
    }
    if (index === 1 && variant > 0 && variant < 2) {
      setColor("red");
    }
    if ((index === 1 || index === 2) && variant > 1 && variant < 3) {
      setColor("yellow");
    }
    if (index === 2 && variant < 2) {
      setColor("grey");
    }
    if (index === 3 && variant < 3) {
      setColor("grey");
    }
    if (variant === 0) {
      setColor("grey");
    }
  }, [variant]);
  console.log(color, "back");

  return <FieldBlockStyle chooseBack={color}></FieldBlockStyle>;
};

export default FieldBlock;