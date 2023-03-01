import { KeyboardArrowUp } from '@mui/icons-material';
import './widjets.scss';

const Widjets = ({ title, link, icon }) => {
    return (
        <div className="widjet">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">
                    12121212
                </span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    20%
                </div>
                {icon}
            </div>
        </div>
    );
};

export default Widjets;