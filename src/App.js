import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PostAdd from './components/views/PostAdd/PostAdd';
import Post from './components/views/Post/Post';
import PostEdit from './components/views/PostEdit/PostEdit';
import NotFound from './components/views/NotFound/NotFound';
import MyPosts from './components/views/MyPosts/MyPosts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './redux/postsRedux';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchPosts()), [dispatch])

  return (
    <div className="App">
      <Container>
          <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/post/add" element={<PostAdd />} />
              <Route path="/post/:_id" element={<Post />} />
              <Route path="/post/:_id/edit" element={ <PostEdit /> } />
              <Route path="/myposts" element={ < MyPosts /> } />
              <Route path="*" element={ < NotFound /> } />
            </Routes>
      </Container>
    </div>
  );
}

export default App;
