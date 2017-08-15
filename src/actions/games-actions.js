import * as types from '../constants';

export const updateCodemirrorContent = (codeType, input) => ({
  type: types.UPDATE_CODEMIRROR_CONTENT,
  payload: {
    type: codeType,
    text: input,
  },
});
