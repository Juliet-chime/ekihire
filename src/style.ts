import styled from "styled-components";
import { AppContextType } from "./context";

export const BodyWrapper = styled.div`
  padding: 205px 74px 0px 74px;
  @media (max-width: 768px) {
    padding: 170px 0px 0px 0px;
  }
`;

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 50px;
`;

export const FullBarStyle = styled.div<AppContextType>`
  width: 100%;
  border: solid blue;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.active ? "30px" : "0px")};
`;
