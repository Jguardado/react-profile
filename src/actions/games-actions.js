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
