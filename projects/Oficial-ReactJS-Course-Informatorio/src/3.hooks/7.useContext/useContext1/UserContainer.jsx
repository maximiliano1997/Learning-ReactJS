import { useContext } from 'react';

import { NavbarContext } from './NavBar'
import { useAppContext } from './NavBar'


const UserContainer = () => {
    const { user, logout } = useAppContext();

    return (
        <div>
            {user ? (
                <>
                    <p>Hello There, {user.name.toUpperCase()}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : <p>Please Login</p>}
        </div>
    );
};

export default UserContainer;