import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import ListItem from './component/listitem';
import SharedButton from './component/button';
import {connect} from 'react-redux';
import {fetchPost} from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Joe', 
  lName: 'Blogs', 
  email: 'email@email.com', 
  age: 26, 
  onlineStatus: true
}]
class App extends React.Component{
  fetch=()=>{
    this.props.fetchPost();
  }
  render(){
    const {posts}  = this.props;
    console.log('pots', posts);
    const configButton = {
      buttonText: 'Get Posts', 
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test = "appComponent">
            <Header />
            <section className = "main">
              <Headline  header = "Posts" 
                desc = "Click the button to render the post"
                tempArr = {tempArr}
              />
              <SharedButton {...configButton} />
              {posts.length>0 && <div>{posts.map((post, index)=>{
                return(
                  <ListItem title = {post.title} description = {post.body} key = {index} />

                );
              })}</div>  }
            </section>
      </div>
    );
  } 
  
}
const mapStateToProps = state =>({
  posts: state.posts
})
export default connect(mapStateToProps, {fetchPost})(App);
