import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    width?: string,
    height?: string,
    textSize?: string,
    padding?: string,
    link?: string,
    children: ReactNode
}

const Button = (props: ButtonProps) => {

    if(props.link) return (
        <Link href={props.link}>
            <a><button className="global-button" style={{width:props.width, height:props.height, fontSize:props.textSize, padding:props.padding}}>{props.children}</button></a>
        </Link>
    )

    return(
        <button className="global-button" style={{width:props.width, height:props.height, fontSize:props.textSize, padding:props.padding}}>{props.children}</button>
    )
}

export default Button;