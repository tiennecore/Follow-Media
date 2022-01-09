import React, {useState} from 'react';
import Title from "./Components/Title";
import Media from "./Components/Media";
const Home = () => {
    const [activeIndex,setActiveIndex]= useState(-1)

    return (
        <div className="pageWrapper">
            <Title setActiveIndex={setActiveIndex}/>
            <Media activeIndex={activeIndex}/>
        </div>
    );
};

export default Home;
