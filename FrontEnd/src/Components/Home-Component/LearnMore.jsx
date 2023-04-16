import React from "react";

function LearnMore()
{
    return <div>
    <video width="60%" height="90%" className="video" controls>
        <source src="./test.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    </div>;
}

export default LearnMore;