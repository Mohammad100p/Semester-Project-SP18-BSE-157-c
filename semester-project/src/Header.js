import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header(){
    return(
    <nav className="header">
        <img className="header-logo" src="" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        <Grid container className="header-seacrh">
            <input type="text" className="header-searchInput" style={{width:"95%",height:"22px",padding: "10px",border: "none"}}/>
            <SearchIcon className="header-searchIcon" />
        </Grid>
        <Grid className="header-nav">
        <Link to="/" className="header-link">
            <Grid contain className="header-option">
                <span className="header-optionOne">Hello,User</span>
                <span className="header-optionTwo">Sign</span>
            </Grid>
        </Link>

        <Link to="/" className="header-link">
            <Grid contain className="header-option">
                <span className="header-optionOne">Returns</span>
                <span className="header-optionTwo">&orders</span>
            </Grid>
        </Link>

        <Link to="/" className="header-link">
            <Grid contain className="header-option">
                <span className="header-optionOne">You</span>
                <span className="header-optionTwo">Prime</span>
            </Grid>
        </Link>
       
        </Grid>
        <Link to="/checkout" className="header-link">
            <Grid className="header-cart">
                <ShoppingBasketIcon/>
                <span className="header-optionTwo header-basketCount">2</span>
            </Grid>
        </Link>
        
    </nav>)
}

export default Header;