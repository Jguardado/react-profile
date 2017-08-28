/*
TODO: Build out initial state that is cuurently in src folder.
shape the node response to reflect that same patterns
*/


const blogResponse = (req, res) =>
  // make call to DB to retrieve blog entry
  // return reponse
  res.send({ blogs: 0 })
;


const demoRespone = () => {
  // make call to DB to retrieve demo response
  // return response
};

module.exports = {
  blogResponse,
  demoRespone,
};
