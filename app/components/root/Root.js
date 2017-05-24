import {connect} from 'react-redux';
import React from 'react';
import Eyes from '../eyes/Eyes'
import Controls from '../controls/Controls'

export default function Root() {

  return (
    <div>
<Controls/>
      <div className="face">
      <Eyes/>
      </div>
    </div>

  );
};
