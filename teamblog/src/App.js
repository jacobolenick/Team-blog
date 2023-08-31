import logo from './logo.svg';
import './App.css';
import Blogcards from './Components/Blogcards';

const blog = {title: "My first blog", body: "This is my first blog post!"}

function App() {
  return (
   <div>
      <Blogcards blog={blog} />
   </div>
  );
}

export default App;
