function Button(props) {

    function onClickButton(e) {
        console.log(props.text);
    }



    return <button onClick={onClickButton} 
    style={{color : props?.color??"blue"}}>
        {props?.text??"기본"}-{props.color?.toUpperCase()}-{props.children}
        </button>;
}

export default Button;