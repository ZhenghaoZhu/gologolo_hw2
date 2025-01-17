import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                border: this.props.logo.border,
                borderStyle: "solid",
                borderWidth: this.props.logo.borderWidth + "pt",
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt",
                width: "auto"
            }
        }
        return (
            <div className="col s8" id = "logoTextDiv"
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace