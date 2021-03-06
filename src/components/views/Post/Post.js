import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { Card, Button } from "react-bootstrap";
import { DateToStr } from './../../../utils/DateToString';
import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import {getUser} from './../../../redux/usersRedux';

const Post = () => {
    const {_id} = useParams();
    const postData = useSelector(state => getPostById(state, _id));
    const userData = useSelector(getUser);
    //if(!postData) return <Navigate to='/' />

    const [isAuthor, setIsAuthor] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (!userData || !postData) return;
  
        if(userData.role === 'admin'){
            setIsAdmin(true)
        } else if(userData.idUser === postData.idUser) {
            setIsAuthor(true)
        } else if(userData.role !== 'admin') {
            setIsAdmin(false)
        } else if(userData.role !== postData.idUser) {
            setIsAuthor(false)
        }
    }, [userData, postData])

    if (!postData) return <div>Loading...</div>
    return(
        <>
            <NavBar />
            <div className="posts-navi d-flex justify-content-around" >
                <Card border='secondary' style={{ width: '40rem' }} >
                    <Card.Body>
                    <Card.Title><h2>{postData.title}</h2></Card.Title>
                    <Card.Img variant="top" src={postData.photo} />
                    <Card.Text>
                        <p>{postData.description}</p>
                        <p><b>Price: </b>{postData.price} $</p>
                        <p><b>Published: </b>{DateToStr(postData.publishedDate)}</p>
                        <p><b>Updated: </b>{DateToStr(postData.updatedDate)}</p>
                        <p><b>Location: </b>{postData.location}</p>
                        <p><b>Status: </b>{postData.status}</p>
                        <p><b>Author: </b>{postData.author}</p>
                        <p><b>Contact: </b>{postData.contact}</p>
                    </Card.Text>
                    </Card.Body>
                    {(isAdmin || isAuthor) && <Button as={Link} to={`/post/${postData._id}/edit`}>Edit post</Button>}
                </Card>
            </div>
        </>
    )
}

export default Post;