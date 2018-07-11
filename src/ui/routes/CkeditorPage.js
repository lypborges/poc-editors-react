import React, { Component } from "react";
import CKEditor from "react-ckeditor-wrapper";
import SampleText from "../../utils/text";

class CkeditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: SampleText
    };
  }

  updateContent(value) {
    this.setState({ model: value });
  }

  render() {
    return (
      <div className="container">
				<CKEditor
	        value={this.state.model}
	        onChange={this.updateContent.bind(this)}
	      />
				<h5>This is the model sent to the backend via API</h5>

			<div>{this.state.model}</div>
			</div>
    );
  }
}

export default CkeditorPage;
