const fetch = window.fetch;

export const handlefetch = (dispatch, path, handler, attr) => {
  fetch(path)
    .then(res => res.json())
    .then(res => dispatch(handler(res[attr])))
    .catch(err => console.log(`there was an error fetching ${path}: `, err));
};
