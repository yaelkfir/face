
import React from 'react';
import {connect} from 'react-redux';

class Eye extends React.Component {

  constructor() {
    super();

    this.state = {
      size: 'big-pupil'
    };
  }

  componentDidMount(){
    console.info(this.props.eyeReducer);
  }
  componentWillUpdate(nextProps){
    if(nextProps.eyeReducer.color !== this.props.eyeReducer.color){
      this.pupil.style.transform = 'scale(1.1)';
    }
    }

  componentDidUpdate(prevProps){
    if(prevProps.eyeReducer.color !== this.props.eyeReducer.color){
      setTimeout(() => {
        this.pupil.style.transform = 'scale(1)';
        }, 150);
    }
  }

  render() {
    return (
  <div className={`eye  ${this.props.eyeReducer.shape}`}>
    <div className={`pupil ${this.props.eyeReducer.color}`} ref={(ref) => this.pupil = ref}/>
  </div>    );
  }
}

function mapStateToProps({testReducer,eyeReducer}) {
  return {
    testReducer: testReducer,
    eyeReducer: eyeReducer
  };
}

export default connect(mapStateToProps)(Eye);
