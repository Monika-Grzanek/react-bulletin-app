import PostForm from "../PostForm/PostForm";
import NavBar from "../NavBar/NavBar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, editPost } from "../../../redux/postsRedux";


const PostEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const post = useSelector(state => getPostById(state, id));
    if(!id) return <Navigate to="/" />;

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/'); 
    }

    return(
        <div>
            <NavBar />
            <PostForm action={handleSubmit} actionText='Update' {...post} />
        </div>
    )
}

export default PostEdit;