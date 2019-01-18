import React from "react";
import stylesSidebar from "./sidebar.module.css";
import { Link } from "gatsby";
import { Image } from "react-bootstrap";
import slack from "../../static/img/slack.png";
import twitter from "../../static/img/twitter.png";
import messenger from "../../static/img/messenger.png";

const SideBar = () => (
    <div className={stylesSidebar.navigation}>
      <ul className={`${stylesSidebar.menu} list-unstyled`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/what-is-my-home-worth">Prices</Link>
        </li>
        <li>
          <Link to="/is-webriq-glue-for-you">Is WebriQ GLUE for YOU</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">Showcase</Link>
        </li>
      </ul>
      <ul className={`${stylesSidebar.leftIcons} list-unstyled d-flex justify-content-start align-items-center mt-5`}>
        <li className="mr-3"><a href="/" title="slack"><Image src={slack}/></a></li>
        <li className="mr-3"><a href="/" title="twitter"><Image src={twitter}/></a></li>
        <li className="mr-3"><a href="/" title="messenger"><Image src={messenger}/></a></li>
      </ul>
    </div>
);

export default SideBar;
