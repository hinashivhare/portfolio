import React from 'react';
import {Row, Col, Button} from 'antd'
import { StyledButtonCV } from '../StyledComponents';
import {DownloadOutlined} from '@ant-design/icons'

const About = () => {
    return (
        <Row gutter={1} justify="center">
            <Col md={{span: 14}} sm={{ span: 4}}>
                <img width="620px" className="about_img" src="/hina-avatar.gif"/>
            </Col>
            <Col md={{span: 10}} sm={{ span: 10}}>
                <h2 className="about_me">About Me</h2>
                <p style={{marginBottom: "20px"}}>
                    Hello, I’m Hina, a software engineer based in Montreal.
                    I love building new things from scratch and that is what I have been doing
                    professionally for 3 years. I am a tinkerer and that has always made me believe
                    that I can build anything I desire. I am very passionate about writing code
                    and bringing life-changing products to life. I am an outdoor person and I
                    enjoy riding a bike or skiing downhill during winter.
                </p>
                <h3>Also I am good at</h3>
                <div className="about_skills">
                    <span>JavaScript (ES6+)</span>
                    <span>React</span>
                    <span>Redux</span>
                    <span>Typescript</span>
                    <span>Jest-Enzyme</span>
                    <span>MySQL</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Git-Hub</span>
                    <span>Agile</span>
                    <span>Waterfall</span>
                    <span>UI/UX</span>
                </div>
                <StyledButtonCV
                    icon={<DownloadOutlined/>}
                    href="Resume.pdf">Download CV
                </StyledButtonCV>
            </Col>
        </Row>
    );
}

export default About;