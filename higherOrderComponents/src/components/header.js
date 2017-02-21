import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
    authButton() {
        return <button>Zarejestruj</button>
    }

    render() {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item"><Link to="/">
                        Start
                    </Link>
                    </li>
                    <li className="nav-item"><Link to="/resources">
                        Zasoby
                    </Link></li>
                    <li className="nav-item"><Link to="">
                        {this.authButton()}
                    </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}