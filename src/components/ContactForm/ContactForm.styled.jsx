import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-bottom: 36px;
  padding: 15px;

  font-size: 20px;
  width: 360px;
  height: 156px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 255, 255, 0.5),
    0px 4px 8px rgba(0, 255, 255, 0.5), 0px 4px 8px rgba(0, 255, 255, 0.5),
    0px 8px 16px rgba(0, 255, 255, 0.5);
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
  &:not-last-of-type {
    gap: 22px;
  }
`;

export const Input = styled.input`
  width: 240px;
  height: 26px;
  color: #ffffff;
  background: #0f0f0f;
  border: none;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 360px;
  height: 36px;
  color: #fff;
  background: #000;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgba(0, 255, 255, 0.3),
      inset 0px 4px 8px rgba(0, 255, 255, 0.3),
      inset 0px 8px 16px rgba(0, 255, 255, 0.3);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
