import React from "react";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import { ImageWrapper, Title } from "./styles";

export default function Header() {
  return (
    <>
      <Title>Choose a ticket!</Title>
      <ImageWrapper>
        <Logo />
      </ImageWrapper>
    </>
  );
}
