import NavBar from "../NavBar/NavBar";
import styles from './MyPosts.module.scss';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getPostsByAuthor} from './../../../redux/postsRedux';
import { Container, Row } from "react-bootstrap";
import Posts from './../Posts/Posts';

const MyPosts = () => {
    //const {idUser} = useParams();
    const postByAuthor = useSelector(state => getPostsByAuthor(state));

    return(
        <>
            <NavBar />        
            <h1 className={styles.title}>My Posts:</h1>
            <Container>
                <Row>
                    {postByAuthor.map(post => <Posts key={post.id} {...post} /> )}
                </Row>
            </Container>
        </>
    )
}

export default MyPosts;