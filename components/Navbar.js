import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsChevronExpand } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { Button, Menu } from "@mui/material";
import { CgAdd } from "react-icons/cg";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between p-2 border-b-2">
      <div className="flex justify-center items-center">
        <a href="#">LOGO</a>
        <p className=" text-2xl mx-2 text-gray-500">/</p>
        <a href="#" className="mr-2">
          {" "}
          <CgProfile className=" text-3xl" />
        </a>
        <p>User</p>
        <div>
          <p id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} className="ml-1 p-2 cursor-pointer hover:bg-gray-400 hover:rounded-md">
            <BsChevronExpand />
          </p>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              <div className="flex justify-center items-center pl-5 border-b-2">
                <BsSearch className=" text-gray-500" />
                <input type="text" placeholder="Search" className=" outline-none p-2 hover:outline-none" />
              </div>
              <p className="px-5 py-2 text-gray-500 font-normal text-sm">Personal Account</p>
              <div className=" cursor-pointer mx-2 py-2 flex justify-between rounded-md items-center hover:bg-gray-300">
                <div className="flex items-center">
                  {" "}
                  <CgProfile className="pr-1 ml-1 text-3xl" />
                  <p className="font-bold"> User</p>
                </div>
                <div>
                  {" "}
                  <BiCheck className="text-2xl mx-2" />
                </div>
              </div>
              <div className=" cursor-pointer mx-2 flex rounded-md items-center hover:bg-gray-300">
                <CgAdd className="ml-1 pr-1 text-3xl my-2  text-sky-500" />
                <p>Create Team</p>
              </div>
            </div>
          </Menu>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="mr-3 text-gray-600 border-2 p-2 cursor-pointer rounded-md hover:text-black hover:border-black">Feedback</p>
        <p className="mr-3 text-gray-600 cursor-pointer hover:text-black ">Docs</p>
        <p id="basic-button1" aria-controls={open ? "basic-menu1" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} className=" cursor-pointer">
          {" "}
          <CgProfile className=" text-3xl" />
        </p>
        <Menu
          id="basic-menu1"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button1",
          }}
        >
          <div>
            <div className="p-2 border-b-2">
              <p>Dashboard</p>
            </div>
            <p className="px-5 py-2 text-gray-500 font-normal text-sm">Personal Account</p>
            <div className=" cursor-pointer mx-2 py-2 flex justify-between rounded-md items-center hover:bg-gray-300">
              <div className="flex items-center">
                {" "}
                <CgProfile className="pr-1 ml-1 text-3xl" />
                <p className="font-bold"> User</p>
              </div>
              <div>
                {" "}
                <BiCheck className="text-2xl mx-2" />
              </div>
            </div>
            <div className=" cursor-pointer mx-2 flex rounded-md items-center hover:bg-gray-300">
              <CgAdd className="ml-1 pr-1 text-3xl my-2  text-sky-500" />
              <p>Create Team</p>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
