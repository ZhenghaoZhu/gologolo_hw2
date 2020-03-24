import React, { Component } from 'react'
import { Range, Button, Modal, TextInput, Toast } from 'react-materialize'
import M from 'materialize-css'

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: this.props.logo.text,
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius,
            borderWidth: this.props.logo.borderWidth,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin,
            width: this.props.logo.width
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleEditTextChange = () => {
      var newText = document.getElementById("editTextInput").value
      document.getElementById("editTextInput").value = ""
      M.Modal.getInstance(document.getElementById("editTextModal")).close();
      if(newText.length == 0) {
        M.toast({html: "Text should be at least one character!", displayLength: 2000});
      }
      else if (!newText.replace(/\s/g, '').length) {
        M.toast({html: "No empty strings!", displayLength: 2000})  
      }
      else if(newText.length > 20){
        M.toast({html: "Text is too long!", displayLength: 2000})
      }
      else {
        // this.setState({ text: newText.toString }, this.completeUserEditing);
        console.log("Before: " + this.state.text)
        console.log("New Text: " + newText)
        this.props.changeLogoCallback(this.props.logo, 
          this.props.logo.key, 
          newText, 
          this.state.textColor, 
          this.state.fontSize, 
          this.state.backgroundColor, 
          this.state.borderColor,
          this.state.borderRadius,
          this.state.borderWidth,
          this.state.padding,
          this.state.margin,
          this.state.width
          );
        console.log("After: " + this.state.text)
        console.log("New Text: " + newText)
      }
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
        console.log("this.props.logo.text: " + this.props.logo.text);
        this.props.changeLogoCallback(this.props.logo, 
          this.props.logo.key, 
          this.props.logo.text, 
          this.state.textColor, 
          this.state.fontSize, 
          this.state.backgroundColor, 
          this.state.borderColor,
          this.state.borderRadius,
          this.state.borderWidth,
          this.state.padding,
          this.state.margin,
          this.state.width);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        let redoDisabled = !this.props.canRedo();
        let redoClass = "waves-effect waves-light btn-small";
        if(redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Button href = "#editTextModal" node = "button" className = "modal-trigger">&#9998;</Button>
                        <Button className={undoClass} onClick={this.handleUndo} id = "undoButton">Undo</Button>
                        <Button className = {redoClass} onClick = {this.handleRedo} id = "redoButton">Redo</Button>
                        <Modal
                          actions={[
                            <Button modal = "confirm" 
                                    node = "button" 
                                    waves = "green" 
                                    id = "editTextSubmitButton" 
                                    onClick={this.handleEditTextChange}>
                                    Submit
                            </Button>,
                            <Button modal="close" node="button" waves="green">Close</Button>
                          ]}
                          bottomSheet={false}
                          fixedFooter={false}
                          header="Edit Logo Text"
                          id="editTextModal"
                          options={{
                            dismissible: true,
                            endingTop: '30%',
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 150,
                            preventScrolling: true,
                            startingTop: '4%'
                          }}
                        >
                          <TextInput
                            id="editTextInput"
                            data-length={20}
                            placeholder = "Write New Text Here"
                          />
                        </Modal>
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
                        </div>
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
                                <Range min="4" max= "50"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <Range min="4" max="100" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <Range min="4" max= "20"
                                    onChange={this.handleThicknessChange}
                                    value={this.props.logo.borderWidth} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range min="4" max= "20" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="4" max= "20" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar