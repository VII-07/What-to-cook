import { ReactNode } from 'react';
import styled from './container.module.scss';
interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styled.wrapper}>{children}</div>;
};
