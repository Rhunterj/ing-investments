import { FC } from 'react';
import * as S from './Main.styled';

interface MainProps{
  children: JSX.Element | JSX.Element[]
};

const Main: FC<MainProps> = ({children}) => {
  return (
    <S.Main>{children}</S.Main>
  )
}

export default Main