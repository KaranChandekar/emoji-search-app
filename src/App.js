import React, { useState } from 'react';
import EmojiList from './emojiList.json';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [emojiList, setEmojiList] = useState(EmojiList);
  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('');

  const searchEmoji = (e) => {
    setInputValue(e.target.value);
  };

  const copyToClipboard = (title, symbol) => {
    navigator.clipboard.writeText(symbol);
    setTitle(title);
    setTimeout(() => {
      setTitle('');
    }, 4000);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container ">
        <h1 className="heading  pb-5">🦄 Emoji Search App</h1>

        {/* Search Bar */}
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
              onChange={searchEmoji}
              type="text"
              placeholder="Search for an emoji"
              aria-label="Search"
            ></input>
          </div>
        </div>

        {/* Emoji Container */}
        <div className="row mx-auto ">
          {emojiList
            .filter((value) => {
              return value.keywords
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            })
            .map((el) => {
              return (
                <div
                  className="card emojiCard  m-3   card-columns mx-auto d-flex justify-content-center "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Click here to Copy"
                  onClick={() => copyToClipboard(el.title, el.symbol)}
                >
                  <div className="emoji">
                    <span
                      className="emoji"
                      ref={(copyEmoji) =>
                        copyEmoji && (copyEmoji.innerHTML = el.symbol)
                      }
                    ></span>
                    {title === el.title && <p className="fade-in ">Copied!</p>}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
