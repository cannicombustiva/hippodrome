import React from 'react';
import style from 'src/components/Layout/layout.module.css';

const Layout: React.FC = ({ children }) => (
  <main>
    <div className={style.Content}>
      {children}
    </div>
    <div>
      <div className={style.Stars} />
      <div className={style.Stars1} />
      <div className={style.Stars2} />
      <div className={style.Stars3} />
    </div>
  </main>

);

export default Layout;
