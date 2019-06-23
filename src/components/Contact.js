import React from "react";

const Contact = (props) => {
    setTimeout(() => {
       props.history.push('./about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid cumque ducimus earum enim illum,
                molestiae nam neque nihil nisi nobis quia quibusdam, quos repellat repellendus repudiandae, sapiente
                ullam veniam?</p>
        </div>
    )
};

export default Contact;
