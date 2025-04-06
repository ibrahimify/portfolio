import { RiArrowRightUpLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Footer = () => {
    // Track mouse position for dynamic glow effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Social media links with consistent naming
    const socialLinks = [
        {
            name: 'GitHub',
            link: 'https://github.com/ibrahimify',
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/ibrahimify',
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/urbanballer09',
        },
        {
            name: 'Email',
            link: 'mailto:ibrahimify.io@gmail.com',
        },
    ];

    // Add mouse move event listener for interactive glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <footer className="relative px-6 pt-8 pb-12 md:py-12 overflow-hidden">
        {/* Primary glow */}
        <div 
            className="absolute bottom-0 left-0 w-full h-48 md:h-36 bg-gradient-to-t from-blue-600/60 via-purple-500/40 to-transparent rounded-full filter blur-3xl opacity-80 pointer-events-none animate-pulse"
            style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.005}px)`,
            }}
        />

        {/* Secondary glow */}
        <div 
            className="absolute bottom-0 right-0 w-3/4 h-32 md:h-28 bg-gradient-to-t from-cyan-500/50 to-transparent rounded-full filter blur-3xl opacity-70 pointer-events-none"
            style={{
                transform: `translate(${-mousePosition.x * 0.008}px, ${mousePosition.y * 0.003}px)`,
            }}
        />
            <div className="relative z-10 max-w-7xl mx-auto md:flex md:justify-between md:items-center gap-8 text-[#AAA6C3]">
                <div className="mb-8 md:mb-0 md:max-w-lg">
                    <p className="text-base leading-relaxed">
                        Now that you got here, why not getting in touch? Look around, there are all my socials and email address. If you want to collaborate or you have a new cool idea, feel free to drop me a message, I'd love to hear it!
                    </p>
                </div>

                {/* Social buttons container */}
                <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="group"
                            aria-label={`${link.name} profile`}
                        >
                            <div className="relative pl-4 py-2 md:px-4 uppercase rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-lg flex items-center">
                                {/* Arrow icon for mobile */}
                                <span className="md:hidden mr-2">
                                    <RiArrowRightUpLine className="inline-block" />
                                </span>
                                
                                {/* Link text */}
                                <span>{link.name}</span>
                                
                                {/* Arrow icon for desktop with improved animation */}
                                <span className="absolute -left-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-x-2 group-hover:translate-y-0 transition-all duration-300 hidden md:inline-block">
                                          <RiArrowRightUpLine className="inline-block" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Copyright text - optional addition */}
            <div className="relative z-10 text-center text-xs text-[#AAA6C3]/70 mt-8">
                © {new Date().getFullYear()} Ibrahim. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;