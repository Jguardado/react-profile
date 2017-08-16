import get from 'lodash/get';

export const getFramework = state => get(state, 'gamesReducer.framework', null);
