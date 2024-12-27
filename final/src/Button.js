import './App.css';

const Button = ({id,content}) => {
    return(
        <>
            <a id={id} content={content} className="button" href ="#">{content}</a>
        </>
    )
}

export default Button;