const initData = {
  color: 'blue',
  shape: 'oval'
};

export default function eyeReducer(data = initData, action) {

  if (action.type === 'SET_EYE_COLOR') {

    const eyeData = Object.assign({}, data);
    eyeData.color = action.data;

    return eyeData;
  }

  if (action.type === 'SET_EYE_SHAPE') {

    const eyeData = Object.assign({}, data);
    eyeData.shape = action.data;

    return eyeData;
  }

  return data;
}
