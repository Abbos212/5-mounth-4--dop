import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { setCurrent, setHistory } from '../../slices/historySlices';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Main = () => {
    const [posts, setPost] = useState([])
    const dispatch = useDispatch()
    const location = useLocation();
    const { current, history } = useSelector((state) => state.history)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            return res.json()
            
            
        }).then((data) => {
            
            setPost(data)
        })    
    }, [])    
    
    
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
            <h1>Users</h1>
            <p>From: {current}</p>
        </div>
    );
    
    
    // function Getshortvalue(word, id) {
    //     if (word.length > 20) {
    //         return (<>{word.substr(0, 20)}+''+<Link to={'/posts/' + id}>More...</Link></>)
    //     } else {
    //         return word
    //     }    
    // }    
    
    // // return (
    // //     <div className='posts'>
    // //         <Link to={'/users'}>Users</Link>
    // //         <Link to={'/posts'}>Posts</Link>

    // //         <Link to={'/details'}>Details</Link>
            

    // //         {
    // //             posts.length !== 0 ? posts.map((item) => {
    // //                 return (
    // //                     <div className='post'>
    // //                         <strong>{item.id}</strong>
    // //                         <h1>{item.title}</h1>
    // //                         <p>{Getshortvalue(item.body, item.id)}</p>
    // //                         <Link to={'/posts/' + item.id}><button>details</button></Link>
    // //                     </div>        
    // //                 )
    // //             }) : ''    

                
    // //         }

    // //     </div>
    // );
}    



export default Main;