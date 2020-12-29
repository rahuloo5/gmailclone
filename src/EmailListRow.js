import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { Checkbox, IconButton } from '@material-ui/core'
import './EmailListRow.css'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {selectMail} from './features/mailSlice'

function EmailListRow({id,title,subject,descritption,time}) {

const history =  useHistory();
const dispatch =useDispatch();

const openMail=()=>{
    dispatch(selectMail({
        id,
        title,
        subject,
        descritption,
        time,
    }))
    history.push("/mail")
}

    return (
        <div onClick={openMail} className="emailList_row">
            <div className="emailList_rowoption">
                <CheckBoxIcon/>
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
             </div>
<h3 className="emailList_title">{title}</h3>
<div className="emailList_message">
    <h4>
        {subject}
        <span className="emailListrow_dec">
        {descritption}

    </span>
    </h4>
   
</div>
<p className="emailList_time">{time}</p>




        </div>
    )
}

export default EmailListRow
