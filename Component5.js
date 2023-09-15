import React from "react";

const Title = () => {
    return (
        <div className="title">
            <h2>
                Get a Lovly App Link
            </h2>
        </div>
    )
}


const Text = () => {
    return (
        <div className="text">
            Subscribe and receive our new sletters 
            to follow the news about our fresh.
        </div>
    )
}

const Input = () => {
    return (
        <div className="input">
            <input type="email" placeholder="Email address" ></input>
            <button className="button">Subscribe</button>
        </div>
    )
}


const Component5 = () => {
    return (
        <div className="component component5">
            <Title />
            <Text />
            <Input />
        </div>
    )
}

export default Component5;