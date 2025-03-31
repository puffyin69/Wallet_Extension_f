import React from "react";
import { FaTwitter, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Wallet Extension</h5>
                        <p>Secure, Fast, and Multi-Chain Wallet for the Future.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                                <FaTelegram />
                            </a>
                            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                                <FaDiscord />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-3 border-light" />
                <p className="mb-0">&copy; {new Date().getFullYear()} Wallet Extension. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
