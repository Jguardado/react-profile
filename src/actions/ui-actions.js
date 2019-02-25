import * as types from '../constants';

export const setEdit = bool => ({
  type: types.EDIT_PAGE,
  payload: bool,
});


const setEditedContent = (text, context) => ({
  type: types.SET_EDITED_CONTENT,
  payload: {
    context,
    text,
  },
});

// NOTE: POST request is not going through
const postInputToServer = (dispatch, input, context) => {
  window.fetch(`/api/${context.path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input,
      context,
    }),
  })
    .then((res) => {
      console.log('inside of res.json() step: ', res.json());
      if (res) { return res.json(); }
    })
    .then((res) => {
      console.log('inside of action dispatch step');
      return dispatch(setEditedContent(input, context));
    })
    .catch(err => console.error('something went wrong with saving to db: ', err));
};
/*
  This will most like be converted into reducer. I can build a sinlge reducer and pass in
  via context the appropriate reducer that the change should apply to. However, I also want to
  disptach an aysnc changeto db. So  may just keep this as an action. Updating state only
  for the interim between saved change and latest api call to DB

*/
export const contentDistributionModule = (dispatch, input, context) => {
  switch (context.type) {
    case 'blog_entry':
      console.log('dispatching change to entry: ', context.entryNum);
      break;
    case 'blog_summary':
      console.log('dispatching change to blog entry summary: ', context.entryNum);
      break;
    case 'demo_text':
      postInputToServer(dispatch, input, context);
      break;
    case 'image_info_panel':
      console.log('dispatching change to info panel text: ', context.entryNum);
      break;
    default:
      console.log('not case found');
  }
};
