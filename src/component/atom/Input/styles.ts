import styled, { css } from "styled-components";

export interface SignupInputType {
  Inputtype: "text" | "password" | "website" | "textheader";
  error: string;
}

export const textStyles = css`
  width: 334px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 9.19px;
  border: none;
  padding: 0 0 0 13px;
  font-size: 16px;
  font-weight: 500;
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: #363636;
  }
`;

export const websiteStyles = css`
  width: 337px;
  height: 48px;
  border-radius: 9.19px;
  border: none;
  padding: 0 0 0 13px;
  font-size: 16px;
  font-weight: 500;
  background: rgba(235, 235, 235, 0.5);
  &::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: #667080;
  }
`;

export const TextHeadStyles = css`
  border-width: 0 0 1px;
  width: 345px;
  height: 36px;
  padding: 0 0 0 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;

  &::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const InputLayout = styled.input<SignupInputType>`
  ${(props) =>
    props.error &&
    css`
      -webkit-text-stroke: 1px #e43429;
      border: 1px solid #e43429;
    `}

  ${(props) => {
    switch (props.Inputtype) {
      case "text":
        return textStyles;
      case "password":
        return textStyles;
      case "website":
        return websiteStyles;
      case "textheader":
        return TextHeadStyles;
      default:
        return textStyles;
    }
  }}
`;