import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  blogReducer: {
    modalActive: false,
    selectedBlogIndex: 0,
    blogEntryImages: [
      'tempUrl',
      'tempUrl',
      'tempUrl',
    ],
    blogEntries: [
      'Plant based diets are the way to go. In the long run it will help everything. this is just a temporary blog',
      'My true workout plans are so legit. I can get you set up with all the correct powerlifting techniques',
      'being brown in the tech industry. Why it feesl weird, when you actually know the truth',
    ],
    blogSummaries: [
      'my road to a plant based diet',
      'strength traing and how its changed my life',
      'latino coder: outsider looking in',
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
};

export default createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
