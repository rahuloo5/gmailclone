import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="gmail_logo"/>
                <ArrowDropDown/>
            </div>
            <div className="header_Middle">
                <SearchIcon></SearchIcon>
                <input type="text" name="search"/>

            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>

            </div>
            
        </div>
    )
}

export default Header
