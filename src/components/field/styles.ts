import styled, { css } from "styled-components";

const redBack = css`
  background-color: red;
`;

const yellowBack = css`
  background-color: yellow;
`;

const greenBack = css`
  background-color: green;
`;

const defaultBack = css`
  background-color: grey;
`;

export const FieldBlockStyle = styled.div<{ chooseBack?: string }>`
  ${({ chooseBack }) => {
    switch (chooseBack) {
      case "red":
        return redBack;
      case "yellow":
        return yellowBack;
      case "green":
        return greenBack;
      default:
        return defaultBack;
    }
  }};
  width: 40px;
  height: 100%;
  content: "";
  margin-left: 5px;
`;
