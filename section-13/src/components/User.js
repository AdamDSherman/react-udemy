import { Component } from 'react';
import classes from './User.module.css';

// Class based component - old style of component. Replaces below.
class User extends Component {
  componentWillUnmount() {
    console.log("user will unmount");
  };

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
