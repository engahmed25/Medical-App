import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-0">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Healthcare</h2>
          <p className="text-sm text-gray-300">
            Copyright © 2026 BRIX Templates
            <br /> All Rights Reserved
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Features</li>
            <li>Pricing</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Getting started</li>
            <li>Help center</li>
            <li>Server Status</li>
            <li>Report a bug</li>
            <li>Chat support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaFacebookF /> <span>Facebook</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTwitter /> <span>Twitter</span>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram /> <span>Instagram</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedinIn /> <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-3">
              <FaYoutube /> <span>YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
