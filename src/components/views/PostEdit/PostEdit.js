import PostForm from "../PostForm/PostForm";
import NavBar from "../NavBar/NavBar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, editPostRequest } from "../../../redux/postsRedux";


const PostEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {_id} = useParams();
    const post = useSelector(state => getPostById(state, _id));
    if(!_id) return <Navigate to="/" />;

    const handleSubmit = post => {

        dispatch(editPostRequest({...post, _id}));
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