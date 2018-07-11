import React from "react"; // Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/themes/gray.min.css";
import SampleText from "../../utils/text";

import "font-awesome/css/font-awesome.css";
import FroalaEditor from "react-froala-wysiwyg";

class FroalaPage extends React.Component {
  constructor() {
    super();
    this.state = {
      config: {
        height: "60vh",
        theme: 'gray'
      },
      model: SampleText
    };

    this.handleModelChange = this.handleModelChange.bind(this);

  }

  handleModelChange(model) {
    this.setState({
      model
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">This is the sample using <a href="https://www.froala.com/wysiwyg-editor">Froala</a></h3>
        <FroalaEditor
          tag="textarea"
          config={this.state.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      <h5>This is the model sent to the backend via API</h5>
      <pre>{this.state.model}</pre>
      </div>
    );
  }
}

export default FroalaPage;
