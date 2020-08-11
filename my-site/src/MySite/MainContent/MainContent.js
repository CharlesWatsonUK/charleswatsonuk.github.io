import React from 'react';
import Styles from './MainContent.module.css';

const mainContent = (props) => {
  return (
    <div className={[Styles.MainContent, props.className].join(' ')}>
      <h1>Main Content</h1>
    </div>
  );
}

export default mainContent;