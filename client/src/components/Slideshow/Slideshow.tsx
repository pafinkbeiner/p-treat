import React, { useState }  from 'react';
import "./Slideshow.css";

const Slideshow = ( props: { images: string[] } ) => {

    const [slideIndex, setSlideIndex] = useState<number>(1);

    showSlides(slideIndex);
    
    function plusSlides(n:number) {
        setSlideIndex(state => state+n);
        showSlides(slideIndex);
    }
    
    function currentSlide(n:number) {
        setSlideIndex(n);
        showSlides(slideIndex);
    }
    
    function showSlides(n:number) {
      if (n > props.images.length) {setSlideIndex(1)}    
      if (n < 1) {setSlideIndex(props.images.length)}
    }
        
    return (
        <>
        
            <div className="slideshow-container">

                { props.images && props.images.map((image:string, index: number) => {

                    return (
                    <div key={index} style={ slideIndex === index+1 ? {display: "block"} : {display: "none"}} className="mySlides fade">
                        <div className="numbertext">{index+1} / {props.images.length}</div>
                            <img src={image} width="100%" alt="text"/>
                        {/* <div className="text">Caption Text</div> */}
                    </div>
                    )
                }) }

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

            </div>
            <br/>

            <div className="center">
                {
                    props.images && props.images.map( (image: string, index: number) => {
                        return (
                            <span key={index} style={ slideIndex === index+1 ? {color: "white"} : {color: "grey"}} className="dot" onClick={() => currentSlide(index+1)}></span> 
                        )
                    })
                }
            </div>
        </>
    )
}

 
export default Slideshow;
