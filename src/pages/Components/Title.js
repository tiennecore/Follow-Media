import React from 'react';
import sampleData from "../utils/Data";

function Title({setActiveIndex}) {
    return (
        <div className="list">
            {sampleData.map((item,index) =>(
                <div
                    className={"projectItem"}
                    key={item.title}
                    onMouseEnter={()=>setActiveIndex(index)}
                    onMouseLeave={()=>setActiveIndex(-1)}
                >
                    <h3 className={"title"}>
                        <span>{item.title}</span>
                    </h3>
                </div>
            ))}
        </div>

    );
}

export default Title;