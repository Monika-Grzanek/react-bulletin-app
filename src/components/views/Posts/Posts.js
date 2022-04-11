import { Card, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './Posts.module.scss';

const Posts = ({...post}) => {
    return(
        <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" src={post.photo} />
                <Card.Body>
                    <Card.Title><Link to={`/post/${post.id}`} className={styles.linkTitle}> {post.title}</Link></Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Posts;