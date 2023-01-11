import React, { Component } from "react";
import EmojiList from "./emojiList.json";
import "./App.css";
import Navbar from "./Components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojiList: EmojiList,
      inputValue: "",
      title: "",
    };

    this.searchEmoji = this.searchEmoji.bind(this);
  }

  searchEmoji = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container ">
          <h1 className="heading  pb-5">🦄 Emoji Search App</h1>
          <div className="col-md-6 mb-4 mx-auto">
            <div className="input-group md-form form-sm form-2 pl-0">
              <div className="input-group-append">
                <span
                  className="input-group-text amber lighten-3"
                  id="basic-text1"
                >
                  <i className="fa fa-search text-grey" aria-hidden="true"></i>
                </span>
              </div>
              <input
                className="form-control my-0 py-1 "
                onChange={(e) => {
                  this.searchEmoji(e);
                }}
                type="text"
                placeholder="Search for an emoji"
                aria-label="Search"
              ></input>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
