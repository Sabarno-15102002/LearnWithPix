import React from "react";
import TeamMate from "./TeamMate";
function OurTeam() {
    return <div className="row">
        <div className="col-lg-2"></div>
        <TeamMate stream="Electrical Engineering" name="Sabarno Biswas" github="https://github.com/Sabarno-15102002" src="Sabarno" facebook="https://www.facebook.com/sabarno.biswas" linkedin="https://www.linkedin.com/in/sabarno-biswas-3163a61ba/" instagram="https://www.instagram.com/sabarnobiswas20021510/"/>
        <TeamMate stream="Information Technology" name="Ananya Pal" src="Ananya" facebook="https://www.facebook.com/profile.php?id=100061999597232" linkedin="https://www.linkedin.com/in/ananya-pal-91946620b/" instagram="https://www.instagram.com/annie7.24/" github="https://github.com/Annie78724"/>
        <div className="col-lg-2"></div>
    </div>
}
export default OurTeam;