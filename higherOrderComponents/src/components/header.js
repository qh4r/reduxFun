import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";
import * as actions from "../actions/index";

class Header extends Component {
    authButton() {
        return <button
            onClick={() => this.props.authenticate(!this.props.authenticated)}>{!this.props.authenticated ? "Zaloguj" : "Wyloguj"}</button>
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
                    <li className="nav-item"><Link>
                        {this.authButton()}
                    </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapState({authenticated}) {
    return {
        authenticated
    }
}

export default connect(mapState, actions)(Header);