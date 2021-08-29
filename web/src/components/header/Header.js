import React from 'react';
import "../header/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ backButton }) {
    const history = useHistory()
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header_icon" />
                </IconButton>
            )}

            <Link to="/">
                <img className="header_logo"
                    src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
                    alt="" />
            </Link>

            <Link to="/chats">
                <IconButton>
                    <ForumIcon fontSize="large" className="header_icon" />
                </IconButton>

            </Link>

        </div>
    )
}
export default Header