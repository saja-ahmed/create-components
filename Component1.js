import React from "react";

const Icon = () => {
    return (
        <div className="icon">
            <i class="fa-solid fa-pause"></i>
        </div>
    )
}

const Text = () => {
    return (
        <div className="text">
            <h4>Lifestyle bed | Fead. beabadoobee - Another way to row</h4>
            <h5>mp3, 44kHZ, 320kbps, 1241Mb</h5>
        </div>
    )
}

const Time = () => {
    return (
        <div className="time">
            05:20
        </div>
    )
}


const Component1 = () => {
    return (
        <div className="component component1">
            <Icon />
            <Text />
            <Time />
        </div>
    )
}

export default Component1