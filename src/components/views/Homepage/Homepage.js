import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Posts from "../Posts/Posts";
import { getAllPosts } from './../../../redux/postsRedux';

const Homepage = () => {
    const posts = useSelector(getAllPosts);
    <div>
        <div>
            <h1>All Posts:</h1>
        </div>
        <Container>
            {posts.map(post => <Posts key={post.id} {...post} /> )}
        </Container>
    </div>
}

export default Homepage;