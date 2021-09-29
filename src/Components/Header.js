import React from 'react'
import './Header.css'

export default function Header() {
    return (
      <div className="relative bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
      
         
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6		">
           Home
        </a>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex space-x-10">
        <div className="relative">
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6		">
                  <i class="fas fa-desktop icon-mob"></i>
          </a>
          <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6		">
            <i className="fas fa-mobile-alt icon-mob"></i>
          </a>
          
        </div>

       

       
      </nav>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10">
      <i class="far fa-save icon-mob "></i>
        </a>
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10">
          <i className="far fa-eye icon-mob "></i>
        </a>
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6	space-x-10	">
          <i className="fas fa-cloud-upload-alt icon-mob"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6		">
              <i className="fas fa-bars space-x-10"></i> Home
            </a>
          </div>
          
        </div>
       
      </div>
     
    </div>
  </div>
</div>

    );
}
