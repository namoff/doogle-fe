import React, { Component, Fragment } from 'react';

import { DoogleService } from './services/doogle'
import { Navbar } from './components/Navbar';
import { RenderCards } from './components/RenderCards';


class App extends Component {

  state = {
    words : [],
    mode  : 'EMPTY'
  }

  fetchWordsFromApi = data =>  {
    DoogleService(data).then( response => {
      this.setState(response);
    });
  }

  changeHandler = event => {
    if (!event.target.value) {
      this.setState({
        mode: "EMPTY"
      })
    }
  }

  submitHandler = event => {
    this.setState({ mode: "PENDING" })
    const data = new FormData(event.target);
    this.fetchWordsFromApi(data);
    event.preventDefault();
  }

  render() {

    return (
      <Fragment>
        <Navbar submitHandler={this.submitHandler}
                changeHandler={this.changeHandler} />
        <div className="container">
          <RenderCards mode={this.state.mode} words={this.state.words} />
        </div>
      </Fragment>
    );
  }
}

export default App;
