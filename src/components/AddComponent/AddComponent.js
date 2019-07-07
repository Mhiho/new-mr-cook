import React, {Component} from 'react';

class AddComponent extends Component {

  state={
      term: '',

  }

  changeHandler(event){
    this.setState({
      term: event.target.value
    })
  }
  submitHandler(event){
    event.preventDefault();
    this.props.submitHandler(this.state.term);
    this.setState({term: ''})
  }

  render(){
    return (
      <div>
      <form
      >
      <label>
        Wpisz składnik:
      <input
        placeholder="składnik"
        type="text"
        value={this.state.term}
        onChange={this.changeHandler.bind(this)}/>
      </label>
      <input
        onClick={this.submitHandler.bind(this)}
        type="submit"/>
      </form>
      </div>
    )
  }
}
export default AddComponent;
