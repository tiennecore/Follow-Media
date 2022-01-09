import {useCallback, useLayoutEffect, useState} from 'react';

const ImageSize = () => {
    const [dimension,setDimension] = useState({})
    const [node,setNode]=useState(null)
    const getDimensionObject = (node)=>{
        const rec = node.getBoundingClientRect()
        return{
            width:rec.width,
            height:rec.height
        }
    }
    const ref= useCallback(node =>{
        setNode(node)
    },[])
    useLayoutEffect(()=>{
        if (node){
            const measure = ()=>setDimension(getDimensionObject(node))
            measure()
        }
    },[node])

    return [ref, dimension]
};

export default ImageSize;
