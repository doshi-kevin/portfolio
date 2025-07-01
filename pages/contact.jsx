import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaBlog } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        message: '',
        isSuccess: false
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Validate form
    const validateForm = () => {
        const { name, email, message } = formData;
        
        if (!name.trim()) {
            return 'Name is required';
        }
        
        if (!email.trim()) {
            return 'Email is required';
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        
        if (!message.trim()) {
            return 'Message is required';
        }
        
        if (message.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        
        return null;
    };

    // Handle form submission
    const handleSubmit = async () => {
        // Validate form
        const validationError = validateForm();
        if (validationError) {
            setModalContent({
                title: 'Validation Error',
                message: validationError,
                isSuccess: false
            });
            setIsOpen(true);
            return;
        }

        setIsLoading(true);

        try {
            // Send email via Vercel API route
            const response = await fetch('/pages/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setModalContent({
                    title: 'Success! 🎉',
                    message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.',
                    isSuccess: true
                });
                
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error(result.message || 'Failed to send message');
            }

        } catch (error) {
            console.error('Error sending email:', error);
            
            setModalContent({
                title: 'Oops! Something went wrong',
                message: error.message || 'Failed to send message. Please try again or email me directly at convey2kevin1012@gmail.com',
                isSuccess: false
            });
        } finally {
            setIsLoading(false);
            setIsOpen(true);
        }
    };

    // Handle modal close
    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Mumbai</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'>N/A</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>convey2kevin1012@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>visittokevin</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+91-9819075607</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:convey2kevin1012@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/doshi-kevin" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/visittokevin/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://medium.com/@convey2kevin1012" target='_blank' rel="noreferrer"><FaBlog /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="input_stylings" 
                                        placeholder="Your Full Name"
                                        disabled={isLoading}
                                        maxLength={100}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="input_stylings" 
                                        placeholder="your.email@example.com"
                                        disabled={isLoading}
                                        maxLength={100}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea 
                                        rows={6} 
                                        cols={50} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="input_stylings" 
                                        placeholder="Hi Kevin! I'd like to discuss..."
                                        disabled={isLoading}
                                        maxLength={1000}
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <button 
                                    onClick={handleSubmit} 
                                    className={`button w-full transition-all duration-300 ${
                                        isLoading 
                                            ? 'opacity-70 cursor-not-allowed' 
                                            : 'hover:transform hover:scale-105'
                                    }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            SENDING MESSAGE...
                                        </div>
                                    ) : (
                                        'SEND MESSAGE 📧'
                                    )}
                                </button>
                            </div>
                            
                            <div className="text-center text-xs text-gray-400 mt-2">
                                Your message will be sent directly to my email
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Response modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={true}
                onCancel={handleModalClose}
                maskClosable={true}
            >
                <div className='flex flex-col items-center justify-center p-6'>
                    <div className="text-4xl mb-4">
                        {modalContent.isSuccess ? '🎉' : '❌'}
                    </div>
                    <h1 className={`font-bold text-2xl mb-4 text-center ${
                        modalContent.isSuccess ? 'text-Green' : 'text-red-500'
                    }`}>
                        {modalContent.title}
                    </h1>
                    <p className='text-Snow text-center leading-relaxed mb-4'>
                        {modalContent.message}
                    </p>
                    
                    {modalContent.isSuccess ? (
                        <div className="text-center">
                            <button 
                                onClick={handleModalClose}
                                className="px-6 py-2 bg-Green text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Awesome! 👍
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <a 
                                className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline' 
                                target='_blank' 
                                href='mailto:convey2kevin1012@gmail.com?subject=Portfolio Contact&body=Hi Kevin!' 
                                rel="noreferrer"
                            >
                                📧 Email me directly
                            </a>
                            <button 
                                onClick={handleModalClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                Try again later
                            </button>
                        </div>
                    )}
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    )
}

export default Contact