import React from 'react'
import ContentBody from '../components/contentBody/ContentBody.jsx'
import SearchBox from "../components/searchBox/SearchBox.jsx"

class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "mainPage">
                <ContentBody />
            </div>
        )
    }
}

export default MainPage
