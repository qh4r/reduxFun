import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

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
    }
}