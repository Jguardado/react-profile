import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  blogReducer: {
    modalActive: false,
    selectedBlogIndex: null,
    blogEntryImages: [
      'src/assests/fruit.jpeg',
      'src/assests/training.jpg',
      'src/assests/coding_pic.jpeg',
    ],
    minBlogEntryImages: [
      'src/assests/fruit-sm.jpeg',
      'src/assests/training-sm.jpeg',
      'src/assests/coding_pic-sm.jpeg',
    ],
    blogEntries: [
      'Plant based diets are the way to go. In the long run it will help everything. this is just a temporary blog',
      'My true workout plans are so legit. I can get you set up with all the correct powerlifting techniques',
      'being brown in the tech industry. Why it feesl weird, when you actually know the truth',
    ],
    blogSummaries: [
      'My road to a plant based diet',
      'Strength traing and how its changed my life',
      'Latino coder: Outsider looking in',
    ],
    blogInfoSection: 'This is where we write blogs',
  },
  imagesReducer: {
    images: [
      'src/assests/san-fran.jpeg',
      'src/assests/la-street.jpeg',
      'src/assests/railroad.jpeg',
      'src/assests/somewhere.jpeg',
    ],
    minImages: [
      'src/assests/san-fran-sm.jpeg',
      'src/assests/la-street-sm.jpeg',
      'src/assests/railroad-sm.jpeg',
      'src/assests/somewhere-sm.jpeg',
    ],
  },
  infoPanelReducer: {
    panels: [
      'This is SF I fucks with it, but not since the hipsters come through',
      'This is LA, reminds me of the barrio',
      'This is just a railroad track, dope pic',
      'I dont know where this is, but I like it',
    ],
  },
  gamesReducer: {
    react: 'import React from "react"\n\nconst SampleStateless = () => {\n return (\n <div>\n \tSample Stateless\n </div>\n )\n}\n\nexport default SampleStateless;',
    redux: 'import { combineReducers } from \"redux\";\n\nconst sampleReducer = (state = {}, action) => {\n switch(action.type)\n \tcase SAMPLE_TYPE:\n\t return {\n \t\t..state,\n \t\tsample: action.payload \n \t}\n \tdefault:\n \t return state;\n}',
    ruby: "def practice\n\n puts 'Do you like cake? (yes/no)'\n ans = gets.chomp\n \n if \n \tans == 'yes'\n \tputs 'me too!'\n \n elsif\n \tans == 'no'\n \tputs 'diet?!'\n \n else\n \tputs 'really?!'\n end\n \nend",
    framework: null,
  },
};

export default createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
