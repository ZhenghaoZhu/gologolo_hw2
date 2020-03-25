import React from 'react'
import { Modal, Button} from 'react-materialize'
import M from 'materialize-css'

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

  confirmLogoDeletion = () => {
    var logo = this.props.logo.key
    this.setState(this.props.deleteLogo.bind(this, logo))
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
            <Button id = "deleteLogoButton" href = "#confirmDeletionModal" node = "button" className="modal-trigger"><i class = "material-icons">🗑️</i></Button>
          </ul>
          <Modal
            actions={[
              <Button id = "deleteLogoConfirmButton" modal="confirm" node="button" waves="blue" onClick = {this.confirmLogoDeletion}>Confirm</Button>,
              <Button id = "deleteLogoCancelButton" modal="close" node="button" waves="blue" >Cancel</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Delete current logo?"
            id="confirmDeletionModal"
            options={{
              dismissible: true,
              endingTop: '35%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '4%'
            }}
          />
        </div>
      </nav>
    )
  };
}

export default Navbar;