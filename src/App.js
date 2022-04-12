import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PostAdd from './components/views/PostAdd/PostAdd';
import Post from './components/views/Post/Post';
import PostEdit from './components/views/PostEdit/PostEdit';
import NotFound from './components/views/NotFound/NotFound';
import MyPosts from './components/views/MyPosts/MyPosts';


function App() {
  return (
    <div className="App">
      <Container>
          <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/post/add" element={<PostAdd />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/post/:id/edit" element={ <PostEdit /> } />
              <Route path="/myposts" element={ < MyPosts /> } />
              <Route path="*" element={ < NotFound /> } />
            </Routes>
      </Container>
    </div>
  );
}

export default App;
