import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.scss'

function Header() {
    return (
        <div className="HeaderContainer">

            <div className="HeaderLeft">
                <Avatar className="HeaderAvatar"
                // TODO Add on click
                />
                <AccessTimeIcon
                />
            </div>

            <div className="HeaderCenter">
                <SearchIcon

                />
                <input placeholder='Search' />
            </div>

            <div className="HeaderRight">
                <HelpOutlineIcon />
            </div>

        </div>
    )
}

export default Header
