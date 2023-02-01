import styled from "styled-components";
import { Media } from "../../ui/breakpoints";

export const InputView = styled.div`
  max-width: 1300px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 700px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
`;

export const TitleView = styled.div`
  margin-bottom: 30px;
  font-size: 35px;
  ${Media.down.s} {
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  width: 20%;
  height: 10px;
  justify-content: space-evenly;
  margin-top: 10px;
`;
