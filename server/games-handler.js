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
    return results;
  }).catch((err) => console.error(err))
};

module.exports = {
  sampleCode,
};
