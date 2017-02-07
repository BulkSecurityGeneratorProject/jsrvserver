import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" href="#" className="navbar-brand">Your Services</Link>
                    </div>

                    <div className="collapse navbar-collapse">
                       <ul className="nav navbar-nav navbar-right">
                           <li>
                               <Link to="/signup">Sign up</Link>
                           </li>
                           <li>
                               <Link to="/signin">Sign in</Link>
                           </li>
                       </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
