import React from "react";

export default function Box (props) {
    // const [on, setOn] = React.useState(props.on)
    console.log(props.id)
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <div style={styles} 
            className="box" 
            onClick={props.toggle}
        >
        </div>
    )
}