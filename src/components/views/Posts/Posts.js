import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({...post}) => {
    return(
        <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.photo} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button as={Link} to={`/post/${post.id}`} variant="primary">Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Posts;