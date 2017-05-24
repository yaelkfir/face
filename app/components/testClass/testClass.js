
import React from 'react';
import {connect} from 'react-redux';

class TestClass extends React.Component {

  constructor() {
    super();

    this.state = {
      right: 1
    };
  }

  componentDidMount(){
    console.info(this.state.right);
  }

  render() {
    return (
<p>hola test CLASS {this.props.testReducer[0]}</p>
    );
  }
}

function mapStateToProps({testReducer}) {
  return {
    testReducer: testReducer
  };
}

export default connect(mapStateToProps)(TestClass);
