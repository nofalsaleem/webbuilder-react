import React from "react";
import ReactDOM from "react-dom";
import './Sidebar.css'




class Sidebar extends React.Component {
  constructor() {
     super();
     this.state = { sideBar: false };
  }
  handleSidebar() {
     this.setState({
        sideBar: !this.state.sideBar
     });
  }
  render() {
     return (
        <header className="header">
           <div className="navContainer">
              <button
                 onClick={this.handleSidebar.bind(this)}
                 className={`navToggle ${this.state.sideBar ? "open" : null}`}
              >
                 
              </button>
              
              <nav>
                 <ul
                    className="mainNav"
                    style={
                       this.state.sideBar
                          ? { transform: "translateX(0)" }
                          : null
                    }
                 >
                    <li>
                       <a
                          class="mainNavLink"
                          href="https://codesandbox.io/s/sidebar-menu-working-version-1-9vc51?file=/sidebar.js"
                       >
                          My Account
                       </a>
                    </li>
                    <li>
                       <a class="mainNavLink" href="#">
                          Log out
                       </a>
                    </li>
                 </ul>
              </nav>
           </div>
           <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
           />
        </header>
     );
  }
}

export default Sidebar;