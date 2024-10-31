const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center bg-gray-800 text-white py-2 font-oxanium font-bold ">
      <div className="logo">
        <span className="font-bold text-3xl mx-9">ToDo</span>
      </div>
      <ul className="flex gap-8 mx-9 p-4 text-lg">
        <li className="cursor-pointer hover:font-bold transition-all-duration-75"><a href="https://www.github.com/dipudangol2/todo" target="_blank">SourceCode</a></li>
      </ul>

    </nav>
  );
};

export default NavBar;
