import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row d-flex align-items-center '> {/* Đảm bảo căn chỉnh theo hàng */}
                    <div className='col-sm-3 navPart1'>
                        <Button className='allCatTab d-flex align-items-center'>
                            <span className='icon1 mr-2'><IoIosMenu/></span>
                            <span className="text">ALL CATEGORIES</span>
                            <span className='icon2 ml-2 '><TfiAngleDown/></span>
                        </Button>
                    </div>  

                    <div className='col-sm-9 navPart2 d-flex align-items-center '>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/">Home</Link></li>
                            <li className='list-inline-item'><Link to="/">Fashion</Link></li>
                            <li className='list-inline-item'><Link to="/">Electronic</Link></li>
                            <li className='list-inline-item'><Link to="/">Bakery</Link></li>
                            <li className='list-inline-item'><Link to="/">grocery</Link></li>
                            <li className='list-inline-item'><Link to="/">Mobiles</Link></li>
                            <li className='list-inline-item'><Link to="/">Blog</Link></li>
                            <li className='list-inline-item'><Link to="/">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
