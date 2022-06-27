import { useState } from "react";
import styled from "styled-components";
import { ErrorText } from "./ErrorText";

const InputContainer = styled.div<{
  hasError?: boolean;
}>`
  padding: 4px;
  margin-bottom: 16px;
  width: 90%;
  max-width: 400px;

  label {
    font-size: 16px;
    line-height: 26px;
    color: rgba(68, 68, 68, 0.6);

    letter-spacing: 0.02em;
    display: flex;
    align-items: flex-end;
    margin-bottom: 16px;
    font-weight: 600;

    span {
      font-size: 11.5px;
      line-height: 18px;
      color: red;
      margin-left: 5px;
    }
  }

  input {
    flex: auto;
    height: 100%;
    padding-left: 12.8px;
    font-family: inherit;
    border: none;
    width: 100%;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.04em;
    border: 1px solid #000;

    transition: all 0.6s ease;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 27.38px;
    height: 27.38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: transparent;
    margin-right: 14.62px;
  }

  @media (max-width: 767px) {
    input {
      font-size: 16px;
    }
  }
`;

export const InputWrapper = styled.div<{
  hasError?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 2px;
`;

interface IInput {
  label: string;
  placeholder: string;
  id: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string | null;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  placeholder,
  id,
  onChange,
  onFocus,
  value,
  error,
  onBlur,
}: IInput) => {
  return (
    <InputContainer hasError={!!error}>
      <label htmlFor={id}>
        {label}
        {error && <span>{error}</span>}
      </label>

      <InputWrapper>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          onBlur={onBlur}
        />
      </InputWrapper>
    </InputContainer>
  );
};
