import PostForm from "../PostForm/PostForm";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsRedux";


const PostAdd = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(addPost({...post}));
        navigate('/');
    }

    return (
        <div>
            <NavBar />
            <PostForm action={handleSubmit} actionText='Save' />
        </div>
    )
}

export default PostAdd;