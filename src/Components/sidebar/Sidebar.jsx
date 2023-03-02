import { AccountCircleOutlined, CreditCard, Dashboard, ExitToApp, InsertChart, LocalShipping, NotificationsNone, PeopleAltOutlined, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../context/context'
import './sidebar.scss'

const Sidebar = () => {
    const { darkMode, dispatch } = useContext(Context)
    return (
        <div className='sidebar'>
            <div className="top"><span className='logo'>Majid-Admin</span></div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <NavLink to='/' active style={{ textDecoration: "none" }}>
                        <li>
                            <Dashboard className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>
                    <p className="title">Lists</p>
                    <NavLink to='/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PeopleAltOutlined className='icon' />
                            <span>Users</span>
                        </li>
                    </NavLink>
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
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
            </div>
        </div>
    )
}

export default Sidebar