import get from 'lodash/get';

export const reactDemo = state => get(state, 'gamesReducer.reactDemo.active', undefined);
export const reduxDemo = state => get(state, 'gamesReducer.reduxDemo.active', undefined);
export const nodeDemo = state => get(state, 'gamesReducer.nodeDemo.active', undefined);

export const existingDemos = () => ({
  reactDemo,
  reduxDemo,
  nodeDemo,
});
