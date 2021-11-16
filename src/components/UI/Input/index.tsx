

interface propsInput{
    type: string,
    placeholder: string
}

export function Input(props: propsInput) {
    return(
        <input type={props.type} placeholder={props.placeholder}/>
    );
}