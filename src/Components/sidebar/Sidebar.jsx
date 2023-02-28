import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PeopleAltOutlined, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material'
import React from 'react'
import './sidebar.scss'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top"><span className='logo'>Majid-Admin</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <Dashboard className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <PeopleAltOutlined className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <Store className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCard className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Useful Links</p>
                    <li>
                        <InsertChart className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNone className='icon' />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlined className='icon' />
                        <span>System health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className='icon' />
                        <span>Logs</span>
                    </li>
                    <p className="title">User</p>

                    <li>
                        <SettingsApplications className='icon' />
                        <span>Settings</span>
                    </li>
                    <li>
                        <AccountCircleOutlined className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar