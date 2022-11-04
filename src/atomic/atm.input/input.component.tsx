import React, { InputHTMLAttributes, useState } from 'react';

import { IconStyled, InputWrapperStyled, InputStyled } from './input.component.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: JSX.Element;
  type?: string;
  textAlign?: 'left' | 'right' | 'center';
  inputSize?: 'XNano' | 'Nano' | 'Small' | 'Medium' | 'Large';
}

export const Input = ({ inputSize, icon, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapperStyled isFocused={isFocused} inputSize={inputSize}>
      {icon && (
        <IconStyled inputSize={inputSize} isFocused={isFocused}>
          {icon}
        </IconStyled>
      )}

      <InputStyled
        inputSize={inputSize}
        icon={!!icon}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputWrapperStyled>
  );
};
