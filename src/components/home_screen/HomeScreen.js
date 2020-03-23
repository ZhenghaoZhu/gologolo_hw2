// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import LogoLinks from './LogoLinks'

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tHomeScreen constructor");
    }

    componentDidMount = () => {
        console.log("\tHomeScreen did mount");
    }

    componentWillUnmount = () => {
        console.log("\tHomeScreen will unmount");
    }

    handleAddNewLogo = () => {
        this.props.addNewLogoCallback();
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tHomeScreen render");

        return (
            <div className="container row">
                <div className="col s4">
                    <h3>Recent Work</h3>
                    <LogoLinks
                        logos={this.props.logos}                
                        goToLogoCallback={this.props.goToLogoCallback}
                    />
                </div>
                <div className="col s8">
                    <div id="home_banner_container">
                        @todo<br />
                        List Maker
                    </div>
                    <div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={this.handleAddNewLogo}>
                            Create a New Logo
                        </button>
                    </div>
                    <p class="range-field">
                        <input type="range" id="test5" min="0" max="100" />
                    </p>
                </div>
            </div>
        )
    }
}

export default HomeScreen