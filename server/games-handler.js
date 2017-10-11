const { SampleCode } = require('./db');

//* **********************************************************************************
// Games Handlers
//* **********************************************************************************

const sampleCode = (req, res) => {
  console.log('in sample code, what does res look like: ', Object.keys(res));
  SampleCode.findAll({
    where: {
      context: 'code',
    },
  }).then((results) => {
    res.send({ sampleCode: results });
  });
};

module.exports = {
  sampleCode,
};
