import React from "react";
function TeamMate(props) {
    return <div className="col-lg-3 ourTeamComponent">
        <div>
            <img className="circle" draggable="false" src={"images/"+props.src+".jpg"} alt="Team-mate"/>
            <h3 className="team-mate-name">{props.name}</h3>
            <p>BE {props.stream}, Jadavpur University, 2020-2024</p>
            <div>
            <a href={props.facebook} target="_blank"><i class="fab fa-facebook facebook social-media"></i></a>
            <a href={props.instagram} target="_blank"><i className="fab fa-instagram instagram social-media"></i></a>
            <a href={props.linkedin} target="_blank"><i className="fab fa-linkedin linkedin social-media"></i></a>
            <a href={props.github} target="_blank"><i className="fab fa-github github social-media"></i></a>
            </div>
        </div>
    </div>
}
export default TeamMate; 