import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {term: ''};
    }

    render() {
        return (<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
            <input onChange={e => this.onInputChange(e)}
                   placeholder="Wpisz miasto dla którego chcesz otrzymać prognozę"
                   value={this.state.term}
                   className="form-control" type="text"/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Wyślij</button>
                </span>
        </form>)
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
        console.log(event.target.value);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        });
    }
}

//nie uzywane gdy null
function mapStateToProps(state){
    console.log('state ', state);
    return {
        forecast: state.forecast
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null oznacza ze kontener nie bedziemial stanu
// w innym wypadku bylo by w jego miejsce mapStateToProps (zwracajace stan)
export default connect(null, mapDispatchToProps)(SearchBar)