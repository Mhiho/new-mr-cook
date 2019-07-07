import React, { Component } from 'react';
import AddComponent from './components/AddComponent/AddComponent';

import sassStyles from './Second.module.scss';


class App extends Component {

  state = {
    terms: []
  }

  submitHandler(term){
    this.setState({
      terms:  [...this.state.terms, term]
    })
  }
  delete(id){
    const list = [...this.state.terms];
    list.splice(id, 1);
    this.setState({terms: list});
  }
  render() {
    console.log(this.state.terms)
    return (
      <div className="App">
        <AddComponent
          submitHandler={this.submitHandler.bind(this)}
        />
        <div>
        { this.state.terms.map((term,index)=> (
          <p onClick={()=>this.delete(index)}
             key={index}>{term}</p>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
