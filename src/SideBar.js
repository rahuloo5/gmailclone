import { Button, IconButton } from '@material-ui/core'
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './SideBar.css'
import SidebarOption from './SidebarOption'
import InboxIcon from '@material-ui/icons/Inbox';
import { ExpandMore, LabelImportant, NearMe } from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch} from 'react-redux'
import {openSendMessage} from './features/mailSlice'
function SideBar() {

    const dispatch =  useDispatch()
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large"/>} 
            className="sidebar_button"
            onClick={()=>dispatch(openSendMessage())}
            
            
            >Compose</Button>
            <SidebarOption Icon ={InboxIcon} title="Inbox" number={50}/>
            <SidebarOption Icon ={StarIcon} title="Starred" number={50}/>
            <SidebarOption Icon ={AccessTimeIcon} title="Snoozed" number={50}/>
            <SidebarOption Icon ={LabelImportantIcon} title="Important" number={50}/>
            <SidebarOption Icon ={NearMeIcon} title="Drafts" number={50}/>
            <SidebarOption Icon ={ExpandMoreIcon} title="more" number={50}/>

            <div className="sidebar_footer">
                <div className="sidebar_footericons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

            </div>
            
        </div>
        </div>
    )
}

export default SideBar
