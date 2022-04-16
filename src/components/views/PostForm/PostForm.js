import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const PostForm = ({actionText, action, ...post}) => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const optionStatus = ['Draft', 'Published', 'Closed']

    const [title, setTitle] = useState(post.title || '');
    const [description, setDescription] = useState(post.description || '');
    const [price, setPrice] = useState(post.price || '');
    const [location, setLocation] = useState(post.location || '');
    const [status, setStatus] = useState(post.status || '');
    const [author, setAuthor] = useState(post.author || '');
    const [contact, setContact] = useState(post.contact || '');
    const [photo, setPhoto] = useState(post.photo || null);
    const [publishedDate, setPublishedDate] = useState(post.publishedDate || '');
    const [updatedDate, setUpdatedDate] = useState(post.updatedDate || '');

    const handleSubmit = e => {
        const data = { title, description, price, location, status, author, contact, photo };
        if (post.id) data.updatedDate = new Date();
        else {
            data.publishedDate = new Date();
            data.updatedDate = data.publishedDate;
        }
        action(data);
        console.log(data);
    }
    return (
        <div className="posts-navi d-flex justify-content-around" >
            <Form onSubmit={validate(handleSubmit)} >
                <Form.Group className="mb-3" style={{ width: '30rem' }}>
                    <Form.Control type="file" selected={photo} onChange={e => setPhoto(e.target.files[0])}  />
                    <Form.Control type="text" placeholder="Title of your advertisement" {...register("title", { required: true, minLength: 10 })} value={title} onChange={e => setTitle(e.target.value)}/>
                    {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 10 signs)</small>}
                    <Form.Control as="textarea" rows={5} placeholder="Describe your advertisement" {...register("description", { required: true, minLength: 20 })} value={description} onChange={e => setDescription(e.target.value)} />
                    {errors.description && <small className="d-block form-text text-danger mt-2">Description is too short (min is 20 signs)</small>}
                    <Form.Control type="number" placeholder="Price ($)" value={price} onChange={e => setPrice(e.target.value)} />
                    <Form.Control type="text" placeholder="Location" {...register("location", { required: true })} value={location} onChange={e => setLocation(e.target.value)} />
                    {errors.location && <small className="d-block form-text text-danger mt-2">Location is required</small>}
                    <Form.Select aria-label="Default select example" {...register("status", { required: true })} value={status} onChange={e => setStatus(e.target.value)} >
                    {optionStatus.map(stat => <option key={stat} value={stat} >{stat}</option>  )}
                    </Form.Select>
                    {errors.status && <small className="d-block form-text text-danger mt-2">You must select status</small>}
                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} value={author} onChange={e => setAuthor(e.target.value)} />
                    {errors.email && <small className="d-block form-text text-danger mt-2">Email is requied</small>}
                    <Form.Control type="number" placeholder="Phone number" {...register("phone", { required: true })} value={contact} onChange={e => setContact(e.target.value)}/>
                    {errors.phone && <small className="d-block form-text text-danger mt-2">Phone number is required</small>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    {actionText}
                </Button>
            </Form>
        </div>
 
    )
}

PostForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    contact: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func
}

export default PostForm;