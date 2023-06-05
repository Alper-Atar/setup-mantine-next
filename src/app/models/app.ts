import { ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export interface IAppProps {}

export type GetLayout = (page: ReactNode, pageProps?: any) => ReactNode;
export type Page<P = {}> = NextPage<P> & { getLayout?: GetLayout };
export type ExtendedAppProps = AppProps & IAppProps & { Component: Page };
