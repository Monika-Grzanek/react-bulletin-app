import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
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
    const [photo, setPhoto] = useState(post.photo || '');
    const [publishedDate, setPublishedDate] = useState(post.publishedDate || '');
    const [dateError, setDateError] = useState(false);
    const [updatedDate, setUpdatedDate] = useState(post.updatedDate || '');
    const [dateUpdatedError, setDateUpdatedError] = useState(false);

    const handleSubmit = e => {
        setDateError(!publishedDate)
        setDateUpdatedError(!updatedDate)
        if(publishedDate && updatedDate){
            action({title, description, price, location, status, author, contact, photo, publishedDate, updatedDate });
        }  
    }
    return (
        <div className="posts-navi d-flex justify-content-around" >
            <Form onSubmit={validate(handleSubmit)} >
                <Form.Group className="mb-3" controlId="formBasic" style={{ width: '30rem' }}>
                    <Form.Control type="file" /*value={photo} onChange={e => setPhoto(e.target.value)} */ />
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
                    <Form.Label > Published date: <DatePicker {...register("publishedDate", { required: true })} selected={publishedDate} onChange={(date) => setPublishedDate(date)}/></Form.Label> 
                    {dateError && <small className="d-block form-text text-danger mt-2">Published date is required</small>}
                    <Form.Label>Update date: <DatePicker {...register("updatedDate", { required: true })} selected={updatedDate} onChange={(date) => setUpdatedDate(date)} /></Form.Label>
                    {dateUpdatedError && <small className="d-block form-text text-danger mt-2">Updated date is required</small>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    {actionText}
                </Button>
            </Form>
        </div>
 
    )
}

export default PostForm;