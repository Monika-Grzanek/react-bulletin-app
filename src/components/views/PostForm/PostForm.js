import { Form, Button } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import DatePicker from "react-datepicker";

const PostForm = ({actionText}) => {
    return (
        <>
            <NavBar />
            <div className="posts-navi d-flex justify-content-around" >
                <Form style={{ width: '30rem' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Title of your advertisement" />
                        <Form.Control as="textarea" rows={5} placeholder="Describe your advertisement" />
                        <Form.Control type="number" placeholder="Price ($)" />
                        <Form.Control type="text" placeholder="Location" />
                        <Form.Select aria-label="Default select example">
                            <option>Status</option>
                            <option value="1">Draft </option>
                            <option value="2">Published </option>
                            <option value="3">Closed </option>
                        </Form.Select>
                        <DatePicker placeholder='Date of publication'/>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Control type="number" placeholder="Phone number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {actionText}
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default PostForm;