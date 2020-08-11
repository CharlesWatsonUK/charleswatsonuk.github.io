import React from 'react';
import Styles from './SideBar.module.css';

const sideBar = (props) => {
  return (
    <div className={[Styles.SideBar, props.className].join(' ')}>
      <h1 className={Styles.title}>Side Bar</h1>
    </div>
  );
}

export default sideBar;