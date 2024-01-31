import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrent } from '../../slices/historySlices';




const Details = () => {
    const [post, setPost] = useState(null);
    
    const params = useParams();
    const navigate = useNavigate();
    
    const previousPath = useSelector(state => state.posts.path);
    const dispatch = useDispatch();
    const { current } = useSelector((state) => state.history);
    
    useEffect(() => {
        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('Details'));
                console.log('Изменение');
            }
        };
    }, []);

    return (
        <div>
            <p>From: {current}</p>
            
        </div>
    );
};

export default Details;
