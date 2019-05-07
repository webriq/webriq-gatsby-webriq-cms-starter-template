import React from "react"
import { Link } from 'gatsby'
import Sticky from 'react-sticky-el'
import SideBarMenu from './Sidebar'
import styl from './header.module.css'

const Header = () => (
  <header className="bg-primary">
    <Sticky 
      className={styl.stickyWrapper}
      stickyClassName="is-sticky"
      stickyStyle={{ transform: 'unset', zIndex: '1' }}
      >
        <div className="menu-container">
          <div className="container py-3">
            <div className="row align-items-center">
              <div className="col-6">
                <Link className="text-white" to="/">LOGO</Link>  
              </div>
              <div className="col-6">
                <SideBarMenu/>
              </div>
            </div>
          </div>
        </div>
    </Sticky>
  </header>
)

export default Header
