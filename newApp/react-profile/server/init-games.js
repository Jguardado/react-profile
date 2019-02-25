// gamesReducer: {
//   node: '',
//   react: 'import React from "react"\n\nconst SampleStateless = () => {\n return (\n <div>\n \tSample Stateless\n </div>\n )\n}\n\nexport default SampleStateless;',
//   redux: 'import { combineReducers } from \"redux\";\n\nconst sampleReducer = (state = {}, action) => {\n switch(action.type)\n \tcase SAMPLE_TYPE:\n\t return {\n \t\t..state,\n \t\tsample: action.payload \n \t}\n \tdefault:\n \t return state;\n}',
//   ruby: "def practice\n\n puts 'Do you like cake? (yes/no)'\n ans = gets.chomp\n \n if \n \tans == 'yes'\n \tputs 'me too!'\n \n elsif\n \tans == 'no'\n \tputs 'diet?!'\n \n else\n \tputs 'really?!'\n end\n \nend",
// },

const { SampleCode } = require('./db');

SampleCode.sync({ force: true })
  .then(() => SampleCode.create({
    context: 'code',
    entryNum: 1,
    code: 'import React from "react"\n\nconst SampleStateless = () => {\n return (\n <div>\n \tSample Stateless\n </div>\n )\n}\n\nexport default SampleStateless;',
    lang: 'react',
  }));

SampleCode.sync({ force: true })
  .then(() => SampleCode.create({
    context: 'code',
    entryNum: 2,
    code: 'import { combineReducers } from \"redux\";\n\nconst sampleReducer = (state = {}, action) => {\n switch(action.type)\n \tcase SAMPLE_TYPE:\n\t return {\n \t\t..state,\n \t\tsample: action.payload \n \t}\n \tdefault:\n \t return state;\n}',
    lang: 'redux',
  }));

SampleCode.sync({ force: true })
  .then(() => SampleCode.create({
    context: 'code',
    entryNum: 3,
    code: '',
    lang: 'node',
  }));

SampleCode.sync({ force: true })
  .then(() => SampleCode.create({
    context: 'code',
    entryNum: 4,
    code: "def practice\n\n puts 'Do you like cake? (yes/no)'\n ans = gets.chomp\n \n if \n \tans == 'yes'\n \tputs 'me too!'\n \n elsif\n \tans == 'no'\n \tputs 'diet?!'\n \n else\n \tputs 'really?!'\n end\n \nend",
    lang: 'ruby',
  }));
