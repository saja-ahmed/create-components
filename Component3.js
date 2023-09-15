import React from "react";

const Icon = () => {
    return (
        <div className="icon">
            <i class="fa-solid fa-paper-plane"></i>
        </div>
    )
}

const Text = () => {
    return (
        <div className="text">
            <h4>
                Thanks for visiting our Blog!
            </h4>
            <span><i class="fa-solid fa-clock"></i> Just now</span>
        </div>
    )
}

const Component3 = () => {
    return (
        <div className="component component3">
            <Icon />
            <Text />
        </div>
    )
}

export default Component3