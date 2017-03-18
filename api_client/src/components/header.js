import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Auth fun</Link>
                <ul className="nav navbar-nav">
                    {
                        this.props.authenticated
                            ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/signout">Wyloguj</Link>
                            </li>
                            :
                            [
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Zaloguj</Link>
                                </li>,
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Zarejestruj</Link>
                                </li>,
                            ]
                    }
                    <li className="nav-item">
                        <Link style={{color: 'red'}} className="nav-link" to="/secret">To strzeżony sekret</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({auth: {authenticated}}) {
    return {
        authenticated
    }
};

export default connect(mapStateToProps)(Header);