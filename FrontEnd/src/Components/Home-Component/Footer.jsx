import React from "react";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return <footer class="footer">
    <div className="email"><i class="far fa-envelope"></i> <a href="mailto:learnwithpix@gmail.com">learnwithpix@gmail.com</a></div>
    <div className="copyright"><i class="fas fa-copyright"></i> Copyright {year}</div>
    <a className="team" href="/ourteam" ><i class="fas fa-handshake-alt"></i> Our team</a>
  </footer>;
}

export default Footer;
