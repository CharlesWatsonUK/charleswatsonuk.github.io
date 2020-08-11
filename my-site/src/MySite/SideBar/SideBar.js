import React from 'react';
import Styles from './SideBar.module.css';
import ProfileImage from './ProfileImage/ProfileImage';
import Title from './Title/Title';

const sideBar = (props) => {
  return (
    <div className={[Styles.SideBar, props.className].join(' ')}>
    
      <ProfileImage className={Styles.ProfileImage}/>
      <Title/>

    </div>
  );
}

export default sideBar;