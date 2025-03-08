# Portfolio Website

## Introduction
This is the source code for my personal portfolio website, designed to showcase my work, skills, and professional experience. The website features a clean, responsive design with interactive elements to enhance user experience. It serves as a platform to present my projects and connect with potential collaborators or employers.

## Features
- **Modern UI/UX**: Designed with a focus on usability and aesthetics.
- **Responsive Design**: Optimized for mobile and desktop.
- **Project Showcase**: Highlights key projects with descriptions and links to repositories.
- **Contact Form**: Allows visitors to reach out directly.
- **Performance Optimization**: Fast loading times and optimized assets for better user experience.

## Tech Stack
- **Frontend**: React.js, Three.js, TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS, Framer Motion 
- **Forms & Emails**: EmailJS (for contact form functionality)
- **Build Tools**: Vite
- **Version Control**: Git, GitHub

## Installation
To set up the project locally, follow these steps:

### Prerequisites
Ensure that you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)

### Clone the Repository
```sh
git clone <https://github.com/ibrahimify/portfolio.git>
cd portfolio
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and configure the required environment variables:
```env
REACT_APP_EMAILJS_USERID=your_emailjs_user_id
REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
```

### Run the Project
```sh
npm run dev
```
The application will be available at `http://localhost:5173`.

### Project Structure 
```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, 3D models, icons
│   ├── components/     # React components
│   │   ├── canvas/     # Three.js components
│   │   └── ...
│   ├── constants/      # Configuration and content data
│   ├── styles/         # CSS and style utilities
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Usage
Navigate through different sections of the portfolio to explore projects, skills, and contact options. The website is designed to be intuitive and user-friendly, allowing visitors to easily access information.

## Deployement
Portfolio is live on **Github Pages** under a custom `.tech` domain. 
Visit:
- [ibrahimify.tech](https://ibrahimify.tech)

## Contributions
This is a personal project, but feedback and suggestions are welcome. Feel free to open an issue or reach out.

For any inquiries, contact me via [muhammadibrahimshoeb@gmail.com](mailto:muhammadibrahimshoeb@gmail.com).