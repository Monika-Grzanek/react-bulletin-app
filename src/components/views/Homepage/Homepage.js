import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Posts from "../Posts/Posts";
import { getAllPosts } from './../../../redux/postsRedux';

const Homepage = () => {
    const posts = useSelector(getAllPosts);
    return(
        <div>
            <div>
                <h1>All Posts:</h1>
            </div>
            <Container>
                <Row>
                    {posts.map(post => <Posts key={post.id} {...post} /> )}
                </Row>
            </Container>
        </div>    
    )
}

export default Homepage;