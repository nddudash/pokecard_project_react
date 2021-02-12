import React from "react"
import "./SearchBox.css"

class SearchBox extends React.Component {
    render() {
        return (
            <div className="searchBoxDiv">
                <input className="searchBoxInput" onChange= {this.props.handleChange} placeholder="Try Searching for a Pokemon!"/>
                <button className="searchBoxButton" onClick={this.props.searchFunction}>Search!</button>
            </div>
        )
    }
}

export default SearchBox