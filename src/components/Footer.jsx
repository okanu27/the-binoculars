import { Link } from "react-router-dom"
import { FaTiktok } from "react-icons/fa6";
import {
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi"
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] px-6 py-10 text-gray-400">
            <div className="mx-auto max-w-7xl text-center">
                <p className="text-[10px] font-bold text-white uppercase tracking-[0.25em]">
                    The Binoculars
                </p>

                {/* Social Media Links */}
                <div className="mt-6 flex justify-center gap-x-6">

                    <a href="https://twitter.com/thebinoculars" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                        <FaXTwitter size={20} />
                    </a>

                    <a
                        href="https://www.instagram.com/thebinoculars/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        <FiInstagram size={20} />
                    </a>

                    <a
                        href="https://www.facebook.com/thebinoculars/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        <FiFacebook size={20} />
                    </a>

                    <a
                        href="https://www.tiktok.com/@thebinoculars"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        <FaTiktok size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/thebinoculars/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white"
                    >
                        <FiArrowUpRight size={20} />
                    </a>
                </div>  

                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-red-500 pt-6 text-sm text-gray-400">

                    2023 - {currentYear} &copy; The Binoculars. All rights reserved.

                    <Link to="/about" className="transition hover:text-white">
                        About Us
                    </Link>

                    <Link to="/contact" className="transition hover:text-white">
                        Contact
                    </Link>

                    <Link to="/privacy-policy" className="transition hover:text-white">
                        Privacy Policy
                    </Link>

                    <Link to="/terms-of-service" className="transition hover:text-white">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
