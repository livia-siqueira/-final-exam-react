import React from "react";


interface propsInput{
    type: string,
    placeholder: string
    onChange() : void
    value: string
}

export const Input = ((props: propsInput) => {
    return(
        <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
    );
})