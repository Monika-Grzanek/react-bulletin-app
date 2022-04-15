import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Posts from "../Posts/Posts";
import { getAllPosts } from './../../../redux/postsRedux';
import styles from './Homepage.module.scss'

const Homepage = () => {

    const sortByUpdate = (a, b) => {
        return (b.updatedDate - a.updatedDate)
    };
    const posts = useSelector(getAllPosts);
    const sortedPost = posts.sort(sortByUpdate);

    return(
        <div>
            <div>
                <h1 className={styles.title}>All Posts:</h1>
            </div>
            <Container>
                <Row>
                    {sortedPost.map(post => <Posts key={post.id} {...post} /> )}
                </Row>
            </Container>
        </div>    
    )
}

export default Homepage;