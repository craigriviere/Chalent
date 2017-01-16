// Import Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import Normalize from 'normalize.css';

// import our components
import Feed from './components/feed';

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <header>
          <div className="header">
            <span className="hamburger">Menu</span>
            <div className="logo"><img src="http://placehold.it/200x50?text=Logo" alt="Logo"/></div>
          </div>
        </header>
        <Feed />


        <div className="push"></div>
      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}


// When page loads then run this..
Meteor.startup(() => {
  // Render App to the screen
  ReactDOM.render(<App />, document.querySelector('.container'));
});
