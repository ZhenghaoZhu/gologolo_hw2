import React, { Component } from 'react'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            fontSize : 24,
            backgroundColor: "#0000FF",
            borderColor: "#F0000F",
            borderRadius: 24,
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleTextColorChange = event => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
      };
     
      handleBackgroundColorChange = event => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState(
          { backgroundColor: event.target.value },
          this.completeUserEditing
        );
      };
     
      handleBorderColorChange = event => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState(
          { borderColor: event.target.value },
          this.completeUserEditing
        );
      };
     
      handleFontSizeChange = event => {
        console.log("handleFontSizeChange to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
      };
     
      handleBorderRadiusChange = event => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState(
          { borderRadius: event.target.value },
          this.completeUserEditing
        );
      };
     
      handleThicknessChange = event => {
        console.log("handleThicknessChange to " + event.target.value);
        this.setState(
          { borderWidth: event.target.value },
          this.completeUserEditing
        );
      };
     
      handlePaddingChange = event => {
        console.log("handlePaddingChange to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
      };
     
      handleMarginChange = event => {
        console.log("handleMarginChange to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
      };

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, 
          this.props.logo.key, 
          this.props.logo.text, 
          this.state.textColor, 
          this.state.fontSize, 
          this.state.backgroundColor, 
          this.state.borderColor,
          this.state.borderRadius);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small">&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div> // FIXME: Need to fix border styling
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar