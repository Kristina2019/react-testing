import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './app.scss';

const tempArr = [{
  fName: 'Joe', 
  lName: 'Blogs', 
  email: 'email@email.com', 
  age: 26, 
  onlineStatus: true
}]
function App() {
  return (
    <div className="App">
          <Header />
          <section className = "main">
            <Headline  header = "Posts" 
              desc = "Click the button to render the post"
              tempArr = {tempArr}
            />
          </section>
    </div>
  );
}

export default App;
