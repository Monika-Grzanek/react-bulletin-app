import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const Post = () => {
    const {id} = useParams();
    const post = useSelector(state => getPostById(state, id));
    return(
        <h1>Post</h1>
        
    )
}

export default Post;