import React, {useContext, useEffect, useState} from "react";
import {Container} from "./styles";
import {Link} from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {Size, useWindowSize} from "../../hooks/sizeHook";
import {GlobalStateContext} from "../../contexts";
import axios from "axios";

const Header: React.FC = () => {

    const [logoutError, setLogoutError] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const size: Size = useWindowSize();
    const {session, setSessionState} = useContext(GlobalStateContext);


    async function handleLogout() {
        try {
            axios.delete(
                `http://localhost:1337/api/sessions`,
                {withCredentials: true}
            );
            setSessionState(null)
            menuToggleHandler();
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        } catch (error: any) {

            setLogoutError(error.message);

        }
    }

    useEffect(() => {
        if (menuOpen && size.width > 768) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }


    return (
        <Container>
            <header>
                <Link to='/' className={'logo'}>
                    Logo
                </Link>

                <nav className={`${menuOpen && (size.width < 769 ? 'isMenu' : '')}`}>
                    {session ? (
                        <>
                            <ul>
                                <li>
                                    <Link to='/' onClick={handleLogout}>Log out</Link>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul>
                                <li>
                                    <Link to='/login' onClick={menuToggleHandler}>Sign in</Link>
                                </li>
                                <li>
                                    <Link to='/registration' onClick={menuToggleHandler}>Signup</Link>
                                </li>
                            </ul>
                        </>
                    )}

                </nav>
                <div className={'menu__toggle'}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler}/>
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler}/>
                    )}
                </div>
            </header>
        </Container>
    )
}

export default Header;
