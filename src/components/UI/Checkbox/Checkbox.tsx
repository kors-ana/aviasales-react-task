import React from "react";

import { CheckboxContainer, StyledLabel, StyledInput } from "./styles";

interface Props {
  label: string;
}

export default function Checkbox({ label }: Props) {
  return (
    <CheckboxContainer>
      <StyledInput type="checkbox" />
      <StyledLabel>{label}</StyledLabel>
    </CheckboxContainer>
  );
}
