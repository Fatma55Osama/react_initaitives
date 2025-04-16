import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiMenu2Fill } from 'react-icons/ri';
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import logo from '../../assets/1000Logo.png'
import { Dropdown } from 'react-bootstrap';
import './index.scss'
import { Link, useLocation } from 'react-router-dom';
import { usepathes } from '../../Store';
export default function Header() {
    const { path } = usepathes()
    const [activePath, setActivePath] = useState()
    const location = useLocation()
    useEffect(() => {
        const decodedPath = decodeURIComponent(location.pathname);
        setActivePath(decodedPath)
       
    }, [location])

    return (
        <div className={styles.header + ' col-12 '}>
            <div className={styles.part1 + " d-flex  h-100 align-items-center align-content-between justify-content-between gap-5 "}>

                <div className='  ms-3 justify-content-center '>
                    <img src={logo} width={100} alt="" />
                </div>
                <div className=' col-8 me-4 d-flex justify-content-between align-items-center  h-100 '>
                    {
                        path.map((el, index) => (
                            <div key={index} className="h-100 d-flex align-items-center">
                                {el.links && el.links.length > 0 ? (
                                    <Dropdown className={`custom-dropdown d-flex align-items-center flex-grow-1 h-100 ${el.path === activePath ? styles.activelink : null}`}>
                                        <Dropdown.Toggle variant="link" className={styles.p + " custom-toggle h-100"} id={`dropdown-basic-${index}`}>
                                            {el.title}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {el.links.map((link, linkIndex) => (
                                                <Dropdown.Item key={linkIndex} as={Link} to={link.path}>
                                                    {link.name}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <Link to={el.path} className={`${styles.p} custom-toggle nav-link h-100 d-flex align-items-center ${el.path === activePath ? styles.activelink :null}`}>
                                        {el.title}
                                    </Link>
                                )}
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className={styles.part2 + " col-12 d-flex flex-row "}>
                <div className='col-12'>
                    {/* <div className='co-11  py-4 px-4 d-flex align-items-center justify-content-between'>
                        <div className='text-center '>
                        <h1 className='text-center'>PrimeCare </h1>
                        </div>
                        <div className='bg d-flex align-items-center gap-5' >
                            <div className='text-uppercase d-flex align-items-center  gap-2'>
                                <span> Login</span>
                            <FaUserAlt /> 
                            </div>
                            <IoSearch style={{fontSize:"20px"}} />
                            </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
