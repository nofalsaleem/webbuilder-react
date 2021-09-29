import React from 'react'
import './Footer.css'
class Footer extends React.Component {
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
     
        <footer className="text-gray-600 body-font">
 
        <div className=" flex flex-col top-20 left-0  bg-white  border-r	">
        <div className="container px-5 py-6  mx-auto flex items-center sm:flex-row flex-col">
         
         
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          
           
             
              
              <button className={`whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6 navToggle ${this.state.sideBar ? "open" : null}`} onClick={this.handleSidebar.bind(this)}>
                <i className="fas fa-plus-circle i-circle"></i> 
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
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Header</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Navigation</span>
                  
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Footer</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Testimonals</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Forms</span>
                  </a>
                </li> <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Faq's</span>
                  </a>
                </li> <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Contact</span>
                  </a>
                </li> <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Social icons</span>
                  </a>
                </li> <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Sliders</span>
                  </a>
                </li>
                 <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                     
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Section Hero</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                      
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Pricing</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                    
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Sections</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                 
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Accrediation</span>
                  </a>
                </li>
              
              
                 </ul>
              </nav>
              <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
           />
          
          </span>
        </div>
      </div>
    </footer>
    );
}}

export default Footer;