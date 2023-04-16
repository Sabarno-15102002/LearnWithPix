import React from "react";
import ReadUpload from "./ReadUpload";
import ImgUpload from "./ImgUpload";
function Upload(props)
{
    return <div >
        <div className="row">
        <div className="col-lg-1"></div>
        <ReadUpload/>
        <ImgUpload/>
    </div>
    </div>
}

export default Upload;