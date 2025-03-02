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
            link: 'muhammadibrahimshoeb@gmail.com',
        },
    ];

    return (
        <div className="px-[25px] pb-[35px] md:flex justify-around items-center bg-transparent uppercase text-[#AAA6C3] md:p-4 md:pb-16">
            <p className="mb-6 md:max-w-lg text-sm">
                Now that you got here, why not getting in touch? Look around, there are all my socials and email address. If you want to collaborate or you have a new cool idea, feel free to drop me a message, I’d love to hear it!
            </p>

            {/* Social buttons container */}
            <div className="flex flex-col gap-0 md:flex-row">
                {socialButtons.map((button, index) => (
                    <a key={index} href={button.link} target="_blank" rel="noreferrer">
                        <button className="group pl-4 md:p-2 md:m-2 uppercase rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                            <span className="relative">
                                {button.name}
                                <span className="absolute -left-5 md:opacity-0 group-hover:opacity-100 group-hover:rotate-[-45deg] transition-all duration-300">
                                    →
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