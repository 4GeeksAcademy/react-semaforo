
import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(){
	const[selectedColor,setSelectedColor] = useState("yellow")
	return (
		<div classNme="container mt-7">
        <div className="container d-table traffic-light w-auto rounded-4 left">
           <div onClickCapture={() => setSelectedColor("red")} className={"light red glow" + (selectedColor === "red" ? "" : "glow2")}></div>
           <div onClickCapture={() => setSelectedColor("yellow")} className={"light yellow glow" + (selectedColor === "yellow" ? "" : "glow")}></div>
           <div onClickCapture={() => setSelectedColor("green")} className={"light green glow" + (selectedColor === "green" ? "" : "glow")}></div>
       </div>
              <div className="pole"></div>
            </div>

	);
};

export default Home;