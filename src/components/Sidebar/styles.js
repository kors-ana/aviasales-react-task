import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 20px;
  padding: 20px;

  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.main};
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    padding-bottom: 20px;
  }
`;
