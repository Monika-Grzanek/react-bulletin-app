import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = ({...post}) => {
    return(
        <ListGroup >
            <ListGroup.Item>
                <Row >
                    <Col className="justify-content-start" xs lg="10">
                        <h4 className="d-inline"> {post.title}</h4>
                    </Col>
                    <Col className="justify-content-end" xs lg="2">
                        <Button as={Link} to={`/post/${post.id}`} variant="primary"  >Show more</Button>
                    </Col>
                </Row>
            </ListGroup.Item>           
        </ListGroup>
    )
}

export default Posts;