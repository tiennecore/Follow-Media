import React, {useEffect, useRef, useState} from 'react';
import sampleData from "../utils/Data";
import UseMousePosition from "../utils/UseMousePosition";

const Media = ({activeIndex}) => {
    const { x, y} = UseMousePosition()
    const ref = useRef(null)
    const [dimension,setDimension] = useState({width:0,height:0})
    useEffect(async ()=>{
        setTimeout(() => {
            setDimension({width:ref.current.offsetWidth,height:ref.current.offsetHeight})
        }, 200);
    },[ref])

    return (
        <div className="media">
            {sampleData.map((item,index) =>{
                const active = index===activeIndex
                const xPos = active? x:0
                const yPos = active? y:0
                return  <img
                    key={item.title}
                    ref={ref}
                    className={active ? "isActive":""}
                    src={item.link}
                    alt=""
                    style={{transform: ` translate(${xPos-(dimension.width/2)}px,${yPos-(dimension.height/2)}px)`}}
                />
            })}
        </div>

    );
};

export default Media;
