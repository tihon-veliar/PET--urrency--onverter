import React from "react";

interface SlideProps { 
    count: number;
    children?: React.ReactNode;
}

const Slide : React.FC<SlideProps> = ({count})=>{
    return(
        <div >
        <h1 className="slide">
            Slide #{count} 
        </h1>
        </div>
    )
}

export default Slide;