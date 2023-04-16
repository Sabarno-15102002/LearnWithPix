import React from "react";
function addToDiv(x) {
  var newImg = document.createElement("img");
  newImg.src = x;
  newImg.style.height = "110px";
  newImg.style.margin = "5px 15px";
  newImg.alt = "Img";
  newImg.classList.add("custom-div-img");
  document.getElementById("story-div").appendChild(newImg);
  newImg.addEventListener("click", () => {
    if (newImg.style.border === "1px solid black") {
      newImg.style.border = "none";
    } 
    else {
      newImg.style.border = "1px solid black";
      document.addEventListener("keypress", function (event) {
        if (event.key === "-") {
          if (newImg.style.border === "1px solid black") {
            var height = newImg.style.height;
            var heightInt = parseInt(height.substring(0, height.length - 2));
            heightInt -= 5;
            newImg.style.height = heightInt + "px";
          }
        }
        if (event.key === "+") {
          if (newImg.style.border === "1px solid black") {
            var height = newImg.style.height;
            var heightInt = parseInt(height.substring(0, height.length - 2));
            heightInt += 5;
            newImg.style.height = heightInt + "px";
          }
        }
        if (event.key ==='a') {
          if (newImg.style.border === "1px solid black") {
            var margin = newImg.style.marginLeft;
            var marginInt = parseInt(margin.substring(0, margin.length - 2));
            marginInt -= 5;
            console.log(marginInt);
            newImg.style.marginLeft = marginInt + "px";
          }
        }
        if (event.key ==='d') {
          if (newImg.style.border === "1px solid black") {
            var margin = newImg.style.marginLeft;
            var marginInt = parseInt(margin.substring(0, margin.length - 2));
            marginInt += 5;
            console.log(marginInt);
            newImg.style.marginLeft = marginInt + "px";
          }
        }
        if (event.key === "x") {
          if (newImg.style.border === "1px solid black") {
            newImg.style.display = "none";
          }
        }
      });
      // var left=document.
    }
  });
}
function Image(props) {
  return (
    <div className="col-lg-4 col-md-3 col-sm-6 col-6 img-component">
      <h5>{props.title}</h5>
      <img
        src={props.src}
        alt={props.title}
        crossOrigin="Anonymous"
        className="img-compomemt-image"
      />
      <button
        onClick={() => addToDiv(props.src)}
        type="button"
        class="btn btn-sm btn-danger"
      >
        Add
      </button>
    </div>
  );
}

export default Image;
