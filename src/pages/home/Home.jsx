import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, Person2Outlined, ShoppingCartOutlined, VerifiedUserOutlined } from '@mui/icons-material'
import React from 'react'
import Chart from '../../Components/charts/Chart'
import Featured from '../../Components/featured/featured'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Widjets from '../../Components/widjets/widjets'
import './home.scss'


const Home = () => {
    return (
        <>
            <div className="home">
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className="widgets">
                        <Widjets title='USERS' link='see all users' icon={<Person2Outlined sx={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)", borderRadius: "5px"
                        }} />} />
                        <Widjets title='ORDERS' link='see all orders' icon={< ShoppingCartOutlined sx={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod", borderRadius: "5px"
                        }} />} />
                        <Widjets title='EARNINGS' link='view all earnings' icon={< MonetizationOnOutlined sx={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple", borderRadius: "5px"
                        }} />} />
                        <Widjets title='BALANCE' link='see all details' icon={< AccountBalanceWalletOutlined
                            sx={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green", borderRadius: "5px" }}
                        />} />
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart />
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">
                            Latest Transactions
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home