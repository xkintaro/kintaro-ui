import './kintaroFooter.css'

import KintaroDescription from '../kintaroDescription/KintaroDescription';
import KintaroTitle2 from '../kintaroTitle2/KintaroTitle2';
import KintaroTitle3 from '../kintaroTitle3/KintaroTitle3';

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const KintaroFooter = ({
    title = "Kintaro Footer",
    description = "This is the footer section of the Kintaro UI. It contains links and information about the project.",
    copyrightText = "© 2023 Kintaro UI. All rights reserved.",

    sections = [
        {
            title: "Title",
            links: [
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" }
            ]
        },
        {
            title: "Title",
            links: [
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" }
            ]
        },
        {
            title: "Title",
            links: [
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" },
            ]
        },
        {
            title: "Title",
            links: [
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" },
                { text: "Link", url: "" }
            ]
        }
    ],
    socialIcons = [
        { icon: <IoIosMail />, url: "" },
        { icon: <FaGithub />, url: "" },
        { icon: <FaInstagram />, url: "" },
        { icon: <FaTwitter />, url: "" }
    ]
}) => {
    return (
        <div className="kintaro-footer-container">
            <div className="kintaro-footer-header">
                <KintaroTitle2 title={title} />
                <KintaroDescription text={description} />
                <div className="kintaro-footer-social-icons">
                    {socialIcons.map((social, index) => (
                        <a key={index} href={social.url} className='kintaro-footer-social-icon'>{social.icon}</a>
                    ))}
                </div>
            </div>

            <div className="kintaro-footer-content">
                {sections.map((section, index) => (
                    <div key={index} className="kintaro-footer-section">
                        <KintaroTitle3 title={section.title} />
                        <div className="kintaro-footer-links">
                            {section.links.map((link, linkIndex) => (
                                <a key={linkIndex} href={link.url} className='kintaro-footer-link'>
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <KintaroDescription text={copyrightText} />
        </div>
    );
};

export default KintaroFooter;