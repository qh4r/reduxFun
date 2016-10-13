import React, {Component} from 'react'; // importuje i to it o

//const SearchBar = () => {
//    return <input />;
//};

class SearchBar extends Component {

    //odpowiednik getInitialState()
    constructor(props) {
        super(props);

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
            <div>
                <p>
                    <input name="search" value={this.state.term}
                           onChange={x => {
                 this.setState({
                        term: x.target.value
                    });
                }}/>

                    &nbsp; Wartosc: {this.state.term}</p>
            </div>
        );
    }

    onInputChanged(e) {
        this.setState({
            term: e.target.value
        });
    }
}

export default SearchBar;