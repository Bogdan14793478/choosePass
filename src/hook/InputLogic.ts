import { useEffect, useState } from "react";

export const InputLogic = () => {
  const [value, setValue] = useState<string>("");
  const [variant, setVariant] = useState<number>(0);

  useEffect(() => {
    const str = /(?=.*[a-zA-Z])/.test(value);
    const num = /\d/.test(value);
    const spSymb = /(?=.*[!#$%&?/ "])/.test(value);
    if (str || num || spSymb) setVariant(1);
    if ((str && num) || (spSymb && str) || (spSymb && num)) setVariant(2);
    if (str && num && spSymb) setVariant(3);
    if (value === "") setVariant(0);
  }, [value]);

  return { value, setValue, variant };
};
