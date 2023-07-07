import { useState } from "react";
import useItemBehavior from "../hooks/useitembehavior";
import { useRef} from 'react';
import useKeyDown from '../hooks/usekeydown';
import util from "../util";

let green = "#C4FF9C";
let yellow = "#feff9c";
let blue = "#9cccff";
let red = "#ff9c9c";

const Note = (props) => {
    const [renderItem] = useItemBehavior(props);
    const noteRef = useRef(null);
    const [color, setColor] = useState(yellow);

    function doubleClick(e){
        e.stopPropagation();
        noteRef.current.contentEditable = true;
    }

    useKeyDown(() => {
        noteRef.current.contentEditable = false;
    }, ["Enter", "Escape"]);

    function render(){
        return (
            <div className = "noteItem" style={{
                ...util.sizeStyle(150, 100),
                background: color
            }} onDoubleClick={doubleClick} ref={noteRef}>
            {props.item.text}
            </div>
        )
    }

    function renderSelection(itemRef){
        function colorSelect(color){
            return <div style={{
                width: 20 + "px",
                height: 20 + "px",
                background: color,
            }} onClick={() => setColor(color)}/>
        }

        return(
            <div className="itemSelection" style={{
                top:itemRef.current.clientHeight,
            }}>
                {colorSelect(yellow)}
                {colorSelect(green)}
                {colorSelect(blue)}
                {colorSelect(red)}
            </div>
            
        )
    }

    return renderItem(render, renderSelection);
}

export default Note;
    