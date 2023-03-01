import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDownOutlined, MoreVertOutlined } from '@mui/icons-material';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1>Total Revenue</h1>
                <MoreVertOutlined className='icon' />
            </div>
            <div className="bottom">
                <span className='progress'>
                    <CircularProgressbar value={70} text='70%' strokeWidth={5} />
                </span>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$555</p>
                <p className='desc'>Previous transactions processing last payment may not be included</p>
                <div className="items">
                    <div className="item">
                        <div className="itemName">Target</div>
                        <div className="itemTwo">
                            <KeyboardArrowDownOutlined />
                            $12.4k
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemName">Last Week</div>
                        <div className="itemTwo">
                            <KeyboardArrowDownOutlined />
                            $12.4k
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemName">Last Month</div>
                        <div className="itemTwo">
                            <KeyboardArrowDownOutlined />
                            $12.4k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured