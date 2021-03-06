// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });

const addTrackBtn = document.querySelectorAll('.addTrack')[0];

addTrackBtn.addEventListener('click', () => {
  const trackName = document.querySelectorAll('.trackInput')[0].value;
  console.log('trackName', trackName);
})
