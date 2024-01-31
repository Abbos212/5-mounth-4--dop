import React, { useEffect } from 'react';
import { setCurrent, setHistory } from '../../slices/historySlices';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
const   Users = () => {
    const dispatch = useDispatch()
    const { current, history } = useSelector((state) => state.history)

    const location = useLocation();

 


    useEffect(() => {
        
        const prevPath = window.location.pathname;

        return () => {
            const currentPath = window.location.pathname;
            if (prevPath !== currentPath) {
                dispatch(setCurrent('Users'))
                console.log(current);
                console.log('change!');
            }
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default Users;