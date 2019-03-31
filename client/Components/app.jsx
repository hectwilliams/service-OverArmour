import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <img className='images' src={this.props.test}></img>
      </div>
    )};
}
export default App;