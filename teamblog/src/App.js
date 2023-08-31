import './App.css';
import Blogcard from './Components/Blogcard';

const blog = {title: "My first blog", body: "This is my first blog post!"}

function App() {
  return (
   <div>
      <Blogcard blog={blog} />
   </div>
  );
}

export default App;
