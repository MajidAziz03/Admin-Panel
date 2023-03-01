import { DarkModeOutlined, Fullscreen, LanguageOutlined, ListOutlined, Message, MessageOutlined, Notifications, Search, SearchOffOutlined } from '@mui/icons-material'
import { Menu } from '@mui/material'
import React from 'react'
import './navbar.scss'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <Search className='icon' />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon' />
                        <span>English</span>
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon' />
                    </div>
                    <div className="item">
                        <Fullscreen className='icon' />
                    </div>
                    <div className="item">
                        <Notifications className='icon' />
                    </div>
                    <div className="item">
                        <MessageOutlined className='icon' />
                    </div>
                    <div className="item">
                        <ListOutlined className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/5722932/pexels-photo-5722932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='avatar' alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar