import React from "react";

const Title = () => {
    return (
        <div className="title">
            <h4>Statistics</h4>
        </div>
    )
}

const Price = () => {
    return (
        <div className="price">
            <h4>$19840</h4>
            <span>+8.5% <i class="fa-solid fa-arrow-up"></i></span>
        </div>
    )
}

const Text = () => {
    return (
        <div className="text">
            <span>Compared to ($13850 last year)</span>
        </div>
    )
}

const Component2 = () => {
    return (
        <div className="component component2">
            <Title />
            <Price />
            <Text />
        </div>
    )
}

export default Component2