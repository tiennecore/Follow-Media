import React from 'react';
import sampleData from "../utils/Data";
import UseMousePosition from "../utils/UseMousePosition";
import ImageSize from "../utils/ImageSize";

const Media = ({activeIndex}) => {
    const { x, y} = UseMousePosition()
    const [ref,{width,height}] = ImageSize()
    return (
        <div className="media">
            {sampleData.map((item,index) =>{
                const xPos = index===activeIndex? x:0
                const yPos = index===activeIndex? y:0

                return  <img
                    key={item.title}
                    ref={ref}
                    className={index===activeIndex ? "isActive":""}
                    src={item.link}
                    alt=""
                    style={{transform: ` translate(${xPos-(width/2)}px,${yPos-(height/2)}px)`}}
                />
            })}
        </div>

    );
};

export default Media;
