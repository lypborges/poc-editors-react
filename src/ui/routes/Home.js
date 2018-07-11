import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/froala">Froala</Link>
        <Link to="/ckeditor">CKeditor 4</Link>
      </div>
    );
  }
}

export default Home;
