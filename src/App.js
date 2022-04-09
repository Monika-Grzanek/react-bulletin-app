import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Homepage from './components/views/Homepage/Homepage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import PostAdd from './components/views/PostAdd/PostAdd';
import Post from './components/views/Post/Post';
import PostEdit from './components/views/PostEdit/PostEdit';
import NotFound from './components/views/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Container>
        <MainLayout>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/post/add" element={<PostAdd />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/post/:id/edit" element={ <PostEdit /> } />
              <Route path="*" element={ < NotFound /> } />
            </Routes>
        </MainLayout>
      </Container>
    </div>
  );
}

export default App;
