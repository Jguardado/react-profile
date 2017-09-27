import * as types from '../constants';

export const updateCodemirrorContent = (codeType, input) => ({
  type: types.UPDATE_CODEMIRROR_CONTENT,
  payload: {
    type: codeType,
    text: input,
  },
});

export const setJSframework = demo => ({
  type: types.SET_JS_FRAMEWORK,
  payload: {
    demo: demo.name,
    active: demo.active,
  },
});

export const deactivateDemo = demoName => ({
  type: types.DEACTIVATE_DEMO,
  payload: {
    demo: demoName,
    active: false,
  },
});

export const receivedSampleCodeInfo = sampleCode => ({
  type: types.RECEIVE_SAMPLE_CODE_INFO,
  payload: sampleCode,
});

const getRubyCode = (res) => {
  const ruby = res.find(entry => entry.lang === 'ruby');
  return ruby.code;
};

const getReactCode = (res) => {
  const react = res.find(entry => entry.lang === 'react');
  return react.code;
};

const getReduxCode = (res) => {
  const redux = res.find(entry => entry.lang === 'redux');
  return redux.code;
};

const getNodeCode = (res) => {
  const node = res.find(entry => entry.lang === 'node');
  return node.code;
};

export const fetchDemoInfo = (dispatch) => {
  window.fetch('/sampleCode')
    .then(res => res.json())
    .then((res) => {
      dispatch(receivedSampleCodeInfo(res.sampleCode));
      return res;
    })
    .then((res) => {
      dispatch(updateCodemirrorContent('ruby', getRubyCode(res.sampleCode)));
      return res;
    })
    .then((res) => {
      dispatch(updateCodemirrorContent('react', getReactCode(res.sampleCode)));
      return res;
    })
    .then((res) => {
      dispatch(updateCodemirrorContent('redux', getReduxCode(res.sampleCode)));
      return res;
    })
    .then((res) => {
      dispatch(updateCodemirrorContent('node', getNodeCode(res.sampleCode)));
    });
};
