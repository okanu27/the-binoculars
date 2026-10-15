import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-[#111111] px-6 py-10 text-gray-400">
            <div className="mx-auto max-w-7xl text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em]">
                    The Binoculars
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-gray-400">
                    <Link to="/about" className="transition hover:text-white">
                        About Us
                    </Link>

                    <Link to="/contact" className="transition hover:text-white">
                        Contact
                    </Link>

                    <Link to="/privacy-policy" className="transition hover:text-white">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
