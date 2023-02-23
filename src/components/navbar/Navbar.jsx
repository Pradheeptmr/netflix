import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { useState } from "react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""/>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
          <SearchOutlinedIcon className="icon"/>
          <span>KID</span>
          < NotificationsActiveOutlinedIcon/>
          <img src="https://d3nn873nee648n.cloudfront.net/900x600/19845/300-SM968775.jpg" 
          alt="" />
       <div className="profile">
          <ArrowDownwardOutlinedIcon className="icon"/>
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Navbar
