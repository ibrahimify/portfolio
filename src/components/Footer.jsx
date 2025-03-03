import { RiArrowRightUpLine } from "react-icons/ri"; // Import the Right Up Arrow icon

const Footer = () => {
    const socialButtons = [
        {
            name: 'github',
            link: 'https://github.com/ibrahimify',
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/ibrahimify',
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/urbanballer09',
        },
        {
            name: 'email',
            link: `mailto:muhammadibrahimshoeb@gmail.com`,
        },
    ];

    return (
        <div className="px-[25px] pb-[35px] md:flex justify-around items-center bg-transparent uppercase text-[#AAA6C3] md:p-4 md:pb-16">
            <p className="mb-6 md:max-w-lg text-base">
                Now that you got here, why not getting in touch? Look around, there are all my socials and email address. If you want to collaborate or you have a new cool idea, feel free to drop me a message, I’d love to hear it!
            </p>

            {/* Social buttons container */}
            <div className="flex flex-col gap-0 md:flex-row">
                {socialButtons.map((button, index) => (
                    <a key={index} href={button.link} target="_blank" rel="noreferrer">
                        <button className="group pl-4 md:p-2 md:m-2 uppercase rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-lg">
                            <span className="relative flex items-center">
                                {/* Arrow icon for mobile */}
                                <span className="md:hidden mr-2">
                                    <RiArrowRightUpLine className="inline-block" />
                                </span>
                                {button.name}
                                {/* Arrow icon for desktop */}
                                <span className="absolute -left-6 md:opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-x-2 group-hover:translate-y-0 transition-all duration-300 hidden md:inline-block">
                                    <RiArrowRightUpLine className="inline-block" />
                                </span>
                            </span>
                        </button>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;