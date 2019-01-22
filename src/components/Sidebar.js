import React from "react";
import stylesSidebar from "./sidebar.module.css";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";
import linkedin from "../../static/img/linkedin.png";
import twitter from "../../static/img/twitter.png";
import webriqmad from "../../static/img/webriqmad.png";

const SideBar = () => (
    <div className={stylesSidebar.navigation}>
      <ul className={`${stylesSidebar.menu} list-unstyled`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/is-webriq-glue-for-you">Is WebriQ GLUE for YOU</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/showcase">Showcase</Link>
        </li>
      </ul>
      <ul className={`${stylesSidebar.quicklinks} list-unstyled mt-5`}>
        <li><Link to="/terms">Terms of Use</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/gdpr">About GDPR</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
      </ul>
      <ul className={`${stylesSidebar.leftIcons} list-unstyled d-flex justify-content-start align-items-center`}>
        <li className="mr-3"><a href="https://twitter.com/WebriQ" title="twitter" target="_blank" rel="noopener noreferrer"><Image src={twitter}/></a></li>
                  <li className="mr-3"><a href="https://www.linkedin.com/in/philippebodart/" title="philippebodart linkedin" target="_blank" rel="noopener noreferrer"><Image src={linkedin}/></a></li>
                  <li className="mr-3"><a href="https://www.messenger.com/t/WebriQHQ" title="webriq goes mad" target="_blank" rel="noopener noreferrer"><Image src={webriqmad}/></a></li>
                  <li className="mr-3"><a href="https://www.linkedin.com/in/alexbelding/" title="alexbelding linkedin" target="_blank" rel="noopener noreferrer"><Image src={linkedin}/></a></li>
      </ul>
    </div>
);

export default SideBar;
