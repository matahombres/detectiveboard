import useItemBehavior from "../hooks/useitembehavior";
import util from "../util";

const Img = (props) => {

    const [render] = useItemBehavior(props);

    function getSize(){
        if(props.item.size)
            return util.sizeStyle(props.item.size.width, props.item.size.height);
        else 
            return util.sizeStyle(200, 150);
    }

    function renderItem(isSelected){
        return (
            <div
            style={{
                ...getSize(),
                backgroundImage:`url("${props.item.src}")`,
                resize: isSelected ? "both" : "none"
                }}
            className="imgItem"
            />
        )
    }

    return render(renderItem);
}

export default Img;
    