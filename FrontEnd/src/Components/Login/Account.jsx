import axios from "axios";
import React, { useState } from "react";

function Account() {
    const jwt = localStorage.getItem("token");
    const claims = atob(jwt.split('.')[1]);
    const userid = JSON.parse(claims)._id;
    const[name,setName] = useState('');
    const[age,setAge] = useState();
    const[email,setEmail] = useState('');
    const[type,setType] = useState("");
    console.log(userid);
    axios.post("http://localhost:5000/account", {userid}
    ).then((res) => {
        console.log(typeof(res.data.Account.isStudent));
        setName(res.data.Account.name);
        setAge(res.data.Account.age);
        setEmail(res.data.Account.email);
        setType(res.data.Account.isStudent.toString());
        console.log(res.status);
    }).catch((err) => {
        console.log(err)
    })
    return <div className="review-container" style={{ textAlign: "left" }}>
        <p><strong>Name: {name}</strong></p>
        <p><strong>Email-Id:{email}</strong></p>
        <p><strong>Age:{age}</strong></p>
        <p><strong>Account Type:{type}</strong></p>
    </div>;
}

export default Account;
