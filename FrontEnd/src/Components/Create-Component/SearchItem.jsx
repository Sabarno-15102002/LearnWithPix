import React, { useEffect, useState } from "react";
import Image from "./Images";
import axios from "axios";
import { Buffer } from 'buffer';

var div=document.getElementsByClassName("searchbox");

function createImgComponent(arr) {
  return <Image title={arr.title} src={arr.src} />;
}
function SearchItem() {
  const [imgArr, setImgArr] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/imgupload").then((response) => {
      response.data.forEach((imgData)=>{
        let imgUrl = new Buffer.from(imgData.img.data).toString("base64");
       setImgArr(prevState => [...prevState, {name: imgData.name, url: "data:image/png;base64,"+imgUrl}]);
      })

    }).catch((err) => {
      console.log(err);
    })
  },[]);
  const handleChange = e => {
    setSearchField(e.target.value);
  };


  return (
    <div className="col-lg-4 create-page-container-item ">
      <input class="searchItems" type="search" placeholder="Search image" onChange={handleChange}/>
      <button class="smallButton">
        <i class="fas fa-search"></i>
      </button>
      <div className="row searchbox scroll">{imgArr.length>0 && imgArr.map((arr)=>{
        var source=arr.name.toLowerCase();
        var target=searchField.toLowerCase();
        var count=document.getElementsByClassName("searchbox")[0].childElementCount;
        var f=0;
        return source.includes(target) && target!="" && target!=" " ? <Image title={arr.name} src={arr.url} />:
         arr===imgArr[imgArr.length-1] &&  target!="" ? <Image title={searchField+"(from Internet)"} src={"https://source.unsplash.com/900x900/?"+target}/> : null;
      })}
        </div>
    </div>
  );
}
export default SearchItem;