import './addComment.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment as sendComment } from '../../api/blogs';
import { newComment } from '../../store/blogStore';

function AddComment({ id }) {
    const textareaRef = useRef();
    const dispatch = useDispatch();

    const sendAsync = () => {
        const text = textareaRef.current.value;

        if (!text) {
            return;
        }

        sendComment(id, text);
        dispatch(newComment(text));
        textareaRef.current.value = '';
    }

    return (<div>
        <textarea className="blog-comment-add-text" ref={textareaRef}></textarea>
        <button onClick={() => sendAsync()}>Отправить</button>
    </div>);
}

export default AddComment;