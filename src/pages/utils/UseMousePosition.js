import {useEffect, useState} from 'react';

const UseMousePosition = () => {
    const [mousePosition,setMousePosition] = useState({x:0,y:0})

    useEffect(()=>{
        const updateMousePosition = event => {
            setMousePosition({x:event.clientX, y: event.clientY})
        }
        window.addEventListener('mousemove',updateMousePosition)
    },[])

    return mousePosition
};

export default UseMousePosition;
