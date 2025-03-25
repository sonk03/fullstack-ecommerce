import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { IoMdSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";

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

                                {/* Header Search Start Here */}
                                <div className='headerSearch ml-3 mr-3'>
                                     <input type='text' placeholder='Search for products...'  />
                                       <Button><IoMdSearch/></Button>
                                </div>
                                {/* Header Search Ends Here */}
                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-5'style={{ marginRight: '8px' }}><LuUserRound/></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'style={{ marginRight: '8px' }}> $3.405</span>
                                          <div className='position-relative ml-2'>
                                          <Button className='circle'><SlBasket/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;