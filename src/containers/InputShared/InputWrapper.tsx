import React from "react";
import FieldBlock from "../../components/Field/FieldBlock";
import InputComponent from "../../components/InputShared/InputComponent";
import { InputLogic } from "../../hook/InputLogic";
import { FieldContainer, InputView, TitleView } from "./styles";

const countField = [1, 2, 3];

export const InputWrapper = () => {
  const formData = InputLogic();
  const length = formData.value.length;
  return (
    <InputView>
      <>
        <TitleView>Сheck your password for strength </TitleView>
        <InputComponent formData={formData} />
        <FieldContainer>
          {countField.map((_, i) => (
            <div key={i}>
              <FieldBlock
                lng={length}
                variant={formData.variant}
                index={i + 1}
              />
            </div>
          ))}
        </FieldContainer>
      </>
    </InputView>
  );
};
