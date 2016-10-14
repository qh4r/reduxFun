import React, {Component} from 'react'; // importuje i to it o
import _ from 'lodash';
const search = Symbol('search');
const throttledSearch = Symbol('throttledSearch');
const timeout = Symbol('timeout');

//const SearchBar = () => {
//    return <input />;
//};

class SearchBar extends Component {

    //odpowiednik getInitialState()
    constructor(props) {
        super(props);
        this[search] = props.searchMethod;
        this[throttledSearch] = _.debounce(term => this[search](term), 1000);
        this.state = {term: ''}
    }

    // jesli nie chcemy uzywac binda to musimy psiac inline

    //rownoznaczkik z ponizszym
    //<label for="bind">BIND: </label>
    //<input label="bind" value={this.state.term}
    //onChange={this.onInputChanged.bind(this)}/>
    //<br />

    render() {
        return (
            <div className="search-bar">
                <input name="search" value={this.state.term}
                       onInput={x => {
                       this.onInputChanged(x.target.value)
                       }}/>
            </div>
        );
    }

    onInputChanged(text) {
        this.setState({
            term: text
        });
        //if (this[timeout]) {
        //    clearTimeout(this[timeout]);
        //}
        //this[timeout] = setTimeout(() => {
        //        this[search](this.state.term);
        //    },
        //    1000);

        //bardziej zwiezla wersja z uzyciem lodasha:
        this[throttledSearch](text);
    }
}

export default SearchBar;