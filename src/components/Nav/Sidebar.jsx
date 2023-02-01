import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import Font from '../Font/Font';

// Assets
import LogoIcon from "../../assets/svg/Logo";

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: "/task",
            name: "Tasks",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ]
    return (
        <>     <Font />
        <div className="sidebarContainer">
            <div style={{ width: "250px" }} className="sidebar_sidebar">
                <div className="sidebar_top_section">
                    <RouterLink className="pointer flexNullCenter" to="/">
                        <LogoIcon />
                        <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                            FollabiJ
                        </h1>
                    </RouterLink>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="sidebar_link" activeClassName='sidebar_active'>
                            <div className="sidebar_icon">{item.icon}</div>
                            <div style={{ display:  "block"}} className="sidebar_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;