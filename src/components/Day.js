import React, {useState} from "react"

function Day({day, cat}){
    const [shown, changeShown] = useState(false);

    function toggleShown(){
        const d = new Date();
        const today = d.getDate();
        console.log("day", day)
        console.log("today", today);
        if(today<day){
            return;
        }
        changeShown(previous => !previous);
    }

    return(
        <div className="day" onClick={toggleShown}>
            <span className="number">{day}</span>
            <img className="tree" 
                style={{ display : shown ? "none" : "inline" }} 
                src="4642326.jpg" />
            <img 
                className="cat-image" 
                style={{ display : shown ? "inline" : "none" }} 
                src={`https://cataas.com/cat/${cat.id}`} 
            />
        </div>
        );
}

export default Day;