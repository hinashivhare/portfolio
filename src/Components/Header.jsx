import React from 'react';
import { Row, Button } from 'antd'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Row justify="center" className='header'>
            <Link to="/">
                <Button type="text">Home</Button>
            </Link>
           <Link to="/about">
               <Button type="text">About</Button>
           </Link>
           <Link to="experience">
               <Button type="text">Experience</Button>
           </Link>
           <Link to="education">
               <Button type="text">Education</Button>
           </Link>
        </Row>
    );
}

export default Header;
