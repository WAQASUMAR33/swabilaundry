'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // for redirecting users
import {
  FaUsers,
  FaSignOutAlt,
  FaChevronDown,
  FaCube,
  FaShoppingCart,
  FaTags,
  FaPaintBrush,
  FaRuler,
  FaCogs,
  FaTicketAlt,
  FaImages,
  FaStar,
  FaBlog,
  FaHome,
  FaPhone,
  FaStore,
  FaPage4
} from 'react-icons/fa';

const Sidebar = ({ setActiveComponent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    customers: false,
    products: false,
    orders: false,
    categories: false,
    size: false,
    color: false,
    settings: false,
    coupons: false,
    sliders: false,
    socialmedia: false,
    blog: false
  });

  const router = useRouter(); // useRouter for navigation

  // Check if the user is authenticated
  useEffect(() => {
    const token = Cookies.get('token') || localStorage.getItem('token');
    if (!token) {
      // Redirect to the login page if not authenticated
      router.push('/admin');
    }
  }, [router]);

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  // Handle logout
  const handleLogout = () => {

    Cookies.remove('token');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/admin';
  };

  return (
    <div className="bg-[#0564B1] text-white flex flex-col text-sm" style={{ width: '250px', height: '100vh', overflowY: 'auto' }}>
      <div className="p-4 text-center">
        <Image
                 width={500}
                  height={500}
            src="/swabi.png" alt="Profile" className="rounded-[2px] px-2 py-2 mx-auto mb-2 bg-white" />
        <h2 className="text-lg font-semibold">Swabi Laundry</h2>
        <p className="text-green-400">● Online</p>
      </div>
      <div className="p-4 border-t border-gray-700">
        <ul className="mt-4 space-y-2">
          <li>
            <a href='/admin/pages/Main'>
              <button
                className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              >
                <FaHome className="h-5 w-5" />
                <span className="ml-2">Home</span>
              </button>
            </a>
          </li>

          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('customers')}
            >
              <FaUsers className="h-5 w-5" />
              <span className="ml-2">Customers Data</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.customers && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/customer'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Customers</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>

    

        

          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('categories')}
            >
              <FaTags className="h-5 w-5" />
              <span className="ml-2">Categories</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.categories && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/categories'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Categories</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/subcategories'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Services</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>

      

          {/* <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('settings')}
            >
              <FaCogs className="h-5 w-5" />
              <span className="ml-2">Settings</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.settings && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/settings'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Settings</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/facebook-pixel'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Facebook Pixel</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li> */}

          {/* <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('coupons')}
            >
              <FaTicketAlt className="h-5 w-5" />
              <span className="ml-2">Coupons</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.coupons && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/coupons'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Coupons</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li> */}

          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('sliders')} // Toggle for sliders
            >
              <FaImages className="h-5 w-5" />
              <span className="ml-2">Slider</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.sliders && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/slider'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">View Sliders</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('socialmedia')} // Toggle for social media
            >
              <FaUsers className="h-5 w-5" />
              <span className="ml-2">Social Media</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.socialmedia && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/socialmedia'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Manage Social Media</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          

          {/* Blog Dropdown */}
          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('blog')} // Toggle for blog
            >
              <FaBlog className="h-5 w-5" />
              <span className="ml-2">Blog</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.blog && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/Blogs'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Add Blog</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/BlogCategories'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Blog Categories</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('reviews')}
            >
              <FaStar className="h-5 w-5" />
              <span className="ml-2">Customer Reviews</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.reviews && (
              <ul className="ml-8 mt-2 space-y-2">
                <li>
                  <a href='/admin/pages/reviews'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">View Reviews</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li> */}


          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={() => toggleDropdown('pages')} // Toggle for social media
            >
              <FaPage4 className="h-5 w-5" />
              <span className="ml-2">Pages</span>
              <FaChevronDown className="h-3 w-3 ml-auto" />
            </button>
            {isDropdownOpen.pages && (
              <ul className=" mt-2 space-y-2 text-sm">
                 <li>
                  <a href='/admin/pages/addPrivacyPolicy'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Privacy Policy</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/addTermsAndConditions'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Terms & Conditions</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/addShippingPolicy'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Shipping Policy</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/addReturnAndExchangePolicy'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Return & Exchange Policy</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/addAboutUs'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">About Us</span>
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/admin/pages/addContactUs'>
                    <button className="flex items-center p-2 hover:bg-blue-700 rounded">
                      <span className="ml-2">Contact Us</span>
                    </button>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href='/admin/pages/addFAQ'>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
            >
              <FaUsers className="h-5 w-5" />
              <span className="ml-2">FAQs</span>
            </button>
            </a>
          </li>
          <li>
            <a href='/admin/pages/addContactInfo'>
              <button
                className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              >
                <FaPhone className="h-5 w-5" />
                <span className="ml-2">Contact Info</span>
              </button>
            </a>
          </li>
          {/* <li>
            <a href='/admin/pages/CompanyDetails'>
              <button
                className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              >
                <FaStore className="h-5 w-5" />
                <span className="ml-2">Company Details</span>
              </button>
            </a>
          </li> */}

          <li>
            <button
              className="flex items-center w-full p-2 hover:bg-blue-700 rounded focus:outline-none"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
