import * as types from '../constants';

export const setEdit = bool => ({
  type: types.EDIT_PAGE,
  payload: bool,
});


export const setEditedContent = (text, context) => ({
  type: types.SET_EDITED_CONTENT,
  payload: {
    context,
    text,
  },
});

/*
  This will most like be converted into reducer. I can buidl sinlge reducer and pass in
  via context teh appropriate reducer that the change should apply to. However, I also want to
  disptach an aysnc changeto db. So  may just keep this as an action. Updating state only
  for teh interim between saved change and latest api call to DB

*/
export const receiveInputTextValue = (input, context) => {
  switch (context) {
    case 'blog_entry':
      console.log('dispatching change to entry: ', context.entryNum);
      break;
    case 'blog_summary':
      console.log('dispatching change to blog entry summary: ', context.entryNum);
      break;
    case 'demo_text':
      console.log('dispatching change to demo text: ', context.entryNum);
      break;
    case 'image_info_panel':
      console.log('dispatching change to info panel text: ', context.entryNum);
      break;
    default:
      console.log('not case found');
  }
};
