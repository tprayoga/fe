import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsChevronExpand } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { Button, Menu, MenuItem } from "@mui/material";
import { CgAdd } from "react-icons/cg";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const dropdown = Boolean(dropdownOpen);
  const open = Boolean(anchorEl);

  const handleDropdown = (event) => {
    setDropdownOpen(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const close = () => {
    setDropdownOpen(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between p-2 border-b-2">
      <div className="flex justify-center items-center">
        <a href="#">
          <img src="./logo.png" alt="logo" />
        </a>
        <p className=" text-2xl mx-2 text-gray-500">/</p>
        <a href="#" className="mr-2">
          {" "}
          <CgProfile className=" text-3xl" />
        </a>
        <p>User</p>
        <div>
          <p
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="ml-1 p-2 cursor-pointer hover:bg-gray-400 hover:rounded-md"
          >
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
                <input
                  type="text"
                  placeholder="Search"
                  className=" outline-none p-2 hover:outline-none"
                />
              </div>
              <p className="px-5 py-2 text-gray-500 font-normal text-sm">
                Personal Account
              </p>
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
        <p className="mr-3 text-gray-600 border-2 p-2 cursor-pointer rounded-md hover:text-black hover:border-black">
          Feedback
        </p>
        <p className="mr-3 text-gray-600 cursor-pointer hover:text-black ">
          Docs
        </p>
        <p
          id="basic-button1"
          aria-controls={dropdownOpen ? "basic-menu1" : undefined}
          aria-haspopup="true"
          aria-expanded={dropdownOpen ? "true" : undefined}
          onClick={handleDropdown}
          className=" cursor-pointer"
        >
          {" "}
          <CgProfile className=" text-3xl" />
        </p>
        <Menu
          id="basic-menu1"
          anchorEl={dropdownOpen}
          open={dropdownOpen}
          onClose={close}
          MenuListProps={{
            "aria-labelledby": "basic-button1",
          }}
        >
          <div className=" p-1 border-b-2">
            <MenuItem>Dashboard</MenuItem>
          </div>
          <div className="p-1 border-b-2 text-gray-500 hover:text-black">
            <MenuItem className="flex items-center justify-between">
              <div>New Team</div>
              <div className="ml-9 text-xl">+</div>
            </MenuItem>
            <MenuItem>Settings</MenuItem>
          </div>
          <div className=" p-1 border-b-2 text-gray-500 hover:text-black">
            <MenuItem>Theme</MenuItem>
          </div>
          <div className="p-1 border-b-2 text-gray-500 hover:text-black">
            <MenuItem>Command Menu</MenuItem>
          </div>
          <div className="pt-1 pl-1 text-gray-500 hover:text-black">
            <MenuItem>Logout</MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
