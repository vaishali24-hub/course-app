import React, { Component } from 'react';
import classes from './Sidebar.module.css';
import cx from 'classnames';
import User from '../../assets/user.png';
import Courses from '../../assets/coursesIcon.png';
import Library from '../../assets/libraryIcon.png';
import Favorites from '../../assets/favoriteIcon.png';
import Account from '../../assets/account.png';
import Signout from '../../assets/signoutIcon.png';

class Sidebar extends Component {

  render(){
    return(
      <React.Fragment>
        <div className={classes.UpperTabs}>
        <img src={User} className={classes.User} alt='Account'/>
        <div className={ cx(classes.Tab,classes.Tab1) }>
          <img className={classes.Icon} src={Courses} alt='' />
          <p>Courses</p>
        </div>
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Library} alt=''/>
          <p>Library</p>
        </div>
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Favorites} alt='' />
          <p>Favourites</p>
        </div>
        </div>
        <footer className={classes.LowerTabs}>
          <div className={classes.Tab}>
            <img className={classes.Icon} src={Account} alt='' />
            <p>Account</p>
          </div>
          <div className={classes.Tab}>
            <img className={classes.Icon} src={Signout} alt='' />
            <p>Sign-out</p>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Sidebar;