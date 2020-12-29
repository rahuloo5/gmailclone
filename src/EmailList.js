import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import React ,{useEffect,useState}from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxIcon from '@material-ui/icons/Inbox';
import Sections from './Sections'
import './EmailList.css'
import EmailListRow from './EmailListRow'
import { db } from './firebase';
function EmailList() {

    const [email , setEmail] = useState([]);

useEffect(()=>{
db.collection('emails').orderBy('timestamp','desc').onSnapshot((snapshot)=>setEmail(snapshot.docs.map((doc)=>({
    id:doc.id,
    data:doc.data(),
}))))

},[])

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settings_left">
<Checkbox/>
<IconButton>
    <ArrowDropDownIcon/>
</IconButton>
<IconButton>
    <RedoIcon/>
</IconButton>
<IconButton>
    <MoreVertIcon/>
</IconButton>

                </div>

<div className="emailList_settings_right">
    <IconButton>
        <ChevronLeftIcon/>
    </IconButton>

    <IconButton>
        <ChevronRightIcon/>
    </IconButton>

    <IconButton>
        <KeyboardHideIcon/>
    </IconButton>

    <IconButton>
        <SettingsIcon/>
    </IconButton>

</div>
 </div>

<div className="emailList_section">
    <Sections Icon ={InboxIcon} title="Inbox" color="red" selected/>
    <Sections Icon ={PeopleIcon} title="Social" color="blue" />
    <Sections Icon ={LocalOfferIcon} title="Promotions" color="green" />

</div>
<div className="emailList_Row">
    {email.map(({id,data:{to , subject,message,timestamp}})=>(
        <EmailListRow 
        id={id}
        key={id}
        title={to}
        subject={subject}
        descritption={message}
        time= {new Date(timestamp?.seconds*1000).toUTCString()}
        />
    ))}
    <EmailListRow 
    title="Twitch "
    subject="Hello Bro"
    descritption="Testawdlajflaewjfawlfarflaejflesjfslkfjslkfjskflsej"
    time="5pm"

    />

</div>


        </div>
    )
}

export default EmailList
