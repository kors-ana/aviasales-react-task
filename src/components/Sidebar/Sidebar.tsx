import React from "react";

import Checkbox from "../UI/Checkbox";
import transfers from "./transfers.mock";

import { Wrapper, Title, List, ListItem } from "./styles";

export default function Sidebar() {
  return (
    <Wrapper>
      <Title>Количество пересадок</Title>
      <List>
        {transfers.map((transfer, index) => {
          return (
            <ListItem key={index}>
              <Checkbox label={transfer} />
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
}
