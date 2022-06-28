import { Fragment, useState, useEffect, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import ErrorBoundary from './ErrorBoundry';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        };
    }

    componentDidMount() {
        // When component is first initialised.
        // Send http request...
        this.setState({ filteredUsers: this.context.users });
    };

    componentDidUpdate(prevProps, prevState) {
        // Use effect negates the use of these sorts of if statements
        if (prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//         </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;