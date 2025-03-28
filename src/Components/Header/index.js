import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { LuUserRound } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>CoVid19</b></p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}>
                                    <img src={Logo} alt='Logo' />
                                </Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2' style={{ gap: '15px' }}>
                                <CountryDropdown style={{ marginRight: '10px' }}/>

                                 <SearchBox/>

                                <div className='part3 d-flex align-items-center' style={{ gap: '15px' }}>
                                    <Button className='circle'><LuUserRound/></Button>
                                    <div className='cartTab d-flex align-items-center' style={{ gap: '10px' }}>
                                        <span className='price'>$3.405</span>
                                        <div className='position-relative'>
                                            <Button className='circle'><SlBasket/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation/>
             
            </div>
        </>
    )
}

export default Header;