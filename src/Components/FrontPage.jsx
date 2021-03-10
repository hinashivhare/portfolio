import React from 'react';
import { Row,Col, Button} from "antd";
import { MailOutlined, PhoneOutlined, LinkedinOutlined, EnvironmentOutlined, FacebookOutlined, GithubOutlined} from '@ant-design/icons'
import UIBot from "./UIBot";

const FrontPage = () => {
    return(
        <div  className="front_page">
            <Row>
                <Col md={{span: 12}} sm={{span: 10}} className="front_page_details">
                    <h2 className="frontpage_name">Hina Shivhare</h2>
                    <h4 className="frontpage_job">Software Engineer</h4>
                    <div className="frontpage_contact">
                        <Button
                            style={{padding: "0 0", marginBottom: "10px"}}
                            href="mailto: hinashivhare26@gmail.com"
                            icon={<MailOutlined/>}
                            type="text"
                        >
                            hinashivhare26@gmail.com
                        </Button>
                        <p>{<PhoneOutlined />} +1 437 887 3764</p>
                        <p className="front_page_location">{<EnvironmentOutlined />} Montreal, Canada</p>
                        <div>
                            <Button
                                type="text"
                                icon={<LinkedinOutlined />}
                                href="https://www.linkedin.com/in/hina-shivhare-aab46913a/"
                            >
                            </Button>
                            <Button
                                type="text"
                                icon={<FacebookOutlined/>}
                                href="https://www.facebook.com/hina.shivhare.3"
                            >
                            </Button>
                            <Button
                                type="text"
                                icon={<GithubOutlined/>}
                                href="https://github.com/hinashivhare"
                            >
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={{span: 12}} sm={{span: 4}}>
                    <div className="front_page_UIbot">
                        <img src="avatar1.gif"/>
                        <UIBot/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default FrontPage;