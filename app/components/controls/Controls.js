
import React from 'react';
import {connect} from 'react-redux';

class Controls extends React.Component {

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
      <div>
        <span>pick eye color</span>
        <ul>
          <li className="colorPicker blue" onClick={()=>{ this.props.setEyeColor('blue')}}/>
          <li className="colorPicker green" onClick={()=>{ this.props.setEyeColor('green')}}/>
          <li className="colorPicker pink" onClick={()=>{ this.props.setEyeColor('pink')}}/>
          <li className="colorPicker purple" onClick={()=>{ this.props.setEyeColor('purple')}}/>
        </ul>
        <span>pick eye shape</span>
        <ul>
          <li className="colorPicker" onClick={()=>{ this.props.setEyeShape('oval')}}>oval</li>
          <li className="colorPicker" onClick={()=>{ this.props.setEyeShape('round')}}>round</li>
          <li className="colorPicker" onClick={()=>{ this.props.setEyeShape('long')}}>long</li>
        </ul>
      </div>

    );
  }
}

function mapStateToProps({testReducer,eyeReducer}) {
  return {
    testReducer: testReducer,
    eyeReducer: eyeReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEyeColor(data) {
      dispatch({
        type: 'SET_EYE_COLOR',
        data: data
      });
    },
    setEyeShape(data) {
      dispatch({
        type: 'SET_EYE_SHAPE',
        data: data
      });
    }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
