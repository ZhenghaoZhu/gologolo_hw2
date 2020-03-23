import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" id = "nav-wrapper">
          <div  className='brand-logo' 
                id = "brand-logo"
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li id = "deleteLogoButton" onClick = {this.props.deleteLogo.bind(this, this.props.logo.key)}>🗑️</li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;