const { SampleCode } = require('./db');

//* **********************************************************************************
// Games Handlers
//* **********************************************************************************

const sampleCode = async function () {
  return await SampleCode.findAll({
    where: {
      context: 'code',
    },
  }).then((results) => {
    res.send({ sampleCode: results });
  }).catch((err) => next(err))
};

module.exports = {
  sampleCode,
};
