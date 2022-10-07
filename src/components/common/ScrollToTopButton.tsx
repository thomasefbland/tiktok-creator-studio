import { useEffect, useState } from "react";

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollHandler = () => {
        window.scrollY > 650 ? setIsVisible(true) : setIsVisible(false);
        // console.log(window.scrollY);
    }

    const scrollToTop = () => {
        window.scroll({top:0,left:0, behavior:'smooth'});
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, false);
    },[])

    return(
        <div className={`scroll-to-top-button ${isVisible}`} onClick={scrollToTop}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25.9082" height="32.2827"> <g> <rect height="32.2827" opacity="0" width="25.9082" x="0" y="0"/> <path d="M12.9541 32.2827C13.8428 32.2827 14.4751 31.6675 14.4751 30.7788L14.4751 8.27148L14.3042 3.17871L13.3301 3.52051L19.4653 10.2368L23.3618 14.0649C23.6353 14.3384 24.0283 14.4751 24.4385 14.4751C25.293 14.4751 25.9082 13.8257 25.9082 12.9883C25.9082 12.5781 25.7715 12.2192 25.4468 11.8774L14.0991 0.512695C13.7744 0.170898 13.3813 0 12.9541 0C12.5269 0 12.1338 0.170898 11.8091 0.512695L0.478516 11.8774C0.153809 12.2192 0 12.5781 0 12.9883C0 13.8257 0.615234 14.4751 1.46973 14.4751C1.87988 14.4751 2.29004 14.3384 2.54639 14.0649L6.44287 10.2368L12.561 3.52051L11.604 3.17871L11.4331 8.27148L11.4331 30.7788C11.4331 31.6675 12.0654 32.2827 12.9541 32.2827Z" fill="#fff" fillOpacity="0.85"/> </g> </svg>
        </div>
    )
}

export default ScrollToTopButton;