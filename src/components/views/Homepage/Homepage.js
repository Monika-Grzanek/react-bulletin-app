import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Posts from "../Posts/Posts";
import { getAllPosts } from './../../../redux/postsRedux';
import styles from './Homepage.module.scss'

const Homepage = () => {
    const posts = useSelector(getAllPosts);
    return(
        <div>
            <div>
                <h1 className={styles.title}>All Posts:</h1>
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