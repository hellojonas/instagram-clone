import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  max-width: 97.5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.6rem;

  @media only screen and (max-width: 614px) {
    padding: 0;
  }
`;

const Container = (props: { children?: ReactNode }) => {
  return <ContainerDiv>{props.children}</ContainerDiv>;
};

export default Container;
