const { SampleCode } = require('./db');

//* **********************************************************************************
// Games Handlers
//* **********************************************************************************

const sampleCode = (req, res) => {
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
