import React from 'react'

export default function Button({ label, handler}) {
    return (
        <button className="b-home__button" onClick={handler}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: "Click ME",
    handler: (e) => {
        console.log("default handler");
        e.preventDefault();
    }
}