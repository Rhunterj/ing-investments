import { FC } from 'react';
import * as S from './Container.styled';

interface ContainerProps{
  children: JSX.Element | JSX.Element[]
};

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <S.Container>{children}</S.Container>
  )
}

export default Container