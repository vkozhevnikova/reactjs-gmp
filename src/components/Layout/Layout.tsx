import * as React from 'react';
import { ILayoutProps } from './ILayoutProps';
import { Wrapper } from '../Wrapper';
import { Header } from '../Header';
import { Footer } from '../Footer';

import styles from './Layout.module.scss';

export const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>
      <Wrapper>{children}</Wrapper>
    </main>
    <Footer />
  </>
);
