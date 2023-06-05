import React, { FC, ReactNode } from 'react';
import { Providers } from './components';

export const AppWrapper: FC<IAppWrapperProps> = (props) => {
  const { children } = props;

  return (
    <Providers>
      {children}
    </Providers>
  );
};

export default Providers;

interface IAppWrapperProps {
  children: ReactNode;
}
