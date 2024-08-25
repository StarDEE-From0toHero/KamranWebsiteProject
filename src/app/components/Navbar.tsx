export default function Navbar() {
  return (
    <nav className="navbar h-[60px] bg-[#28335B]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a>Mission</a>
            </li>
            <li>
              <a href="#crew">Crew</a>
            </li>
          </ul>
        </div>
        <img src="./image/favicon.svg" className="lg:pl-[40px]"></img>
        <h1 className=" text-white text-[48px] font-bold flex items-center lg:pl-5">
          <span className="text-[#F2B734]">STAR</span>DEE
        </h1>
      </div>
      <div className="navbar-end hidden lg:flex text-white font-bold ">
        <ul className="menu menu-horizontal px-5 gap-x-10 text-base">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a>Mission</a>
          </li>
          <li>
            <a href="#crew">Crew</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
