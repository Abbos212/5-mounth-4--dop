import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setHistory, setCurrent } from '../../slices/historySlices';

const Posts = () => {
    const { history, current } = useSelector(state => state.history);
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(current);

    useEffect(() => {
        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('Posts'));
                console.log('change!');
               
            }
        };
    }, [dispatch, location]);

    return (
        <div>
            <h1>From: {current}</h1>
            {}
        </div>
    );
};

export default Posts;
