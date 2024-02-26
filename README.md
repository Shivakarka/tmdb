# TMDB Clone

TMDB website clone

Deployed Live Link : [Click here](https://tmdb-clone-sk.vercel.app/)

## Note

- Note: Users of Jio Internet may encounter issues accessing TMDB API data due to certain network restrictions. They may need to change their DNS settings to 1.1.1.1 or utilize a VPN to bypass these restrictions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Project Demo](#project-demo)
- [Screenshots](#screenshots)

## Introduction

This project is a clone of The Movie Database (TMDB) website built using React.js, TypeScript, Tailwind CSS, Daisy UI, react-router and SWR for data fetching and caching. It replicates the functionality and design of the original TMDB website, allowing users to browse movies, TV shows, view details, watch trailers, and more.

## Features

Here are some features of this project:

- **Browse Movies and TV Shows**: Users can explore a vast collection of movies and TV shows.
- **View Details**: Detailed information about each movie or TV show, including synopsis, ratings, cast, crew, and more.
- **Watch Trailers**: Users can watch trailers of movies and TV shows directly on the website.
- **Search Functionality**: Search for specific movies or TV shows.
- **Responsive Design**: The website is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
- **Data Fetching and Caching**: Utilizes SWR for efficient data fetching, caching, and updating of data from the server.

## Getting Started

Guide for users to setup the project on their local machines.

### Installation

Step-by-step instructions on how to install and run the project locally.

```
# Clone the repository
git clone https://github.com/Shivakarka/tmdb.git

# Navigate to the project directory
cd tmdb

# Install dependencies
npm install

# Start the development server
npm run dev

```

Additional steps required to run locally:

- To run the project locally, you'll also need to obtain an API key from The Movie Database (TMDB) website. Once you have the API key, create a new file named .env in the root directory of the project and add the following line:

```
VITE_API_KEY=your-api-key-here
```

## Folder Structure

```
tmdb
│
├── public
│ ├── index.html
│ └── _redirects
├── src
│ ├── assets
│ │ ├── icons
│ │ └── images
│ ├── components
│ │ ├── blurEffect
│ │ ├── castSection
│ │ ├── currentSeason
│ │ ├── detailsPageHeader
│ │ ├── footer
│ │ ├── loader
│ │ ├── main
│ │ ├── mediaSection
│ │ ├── movieDetails
│ │ ├── navbar
│ │ ├── poster
│ │ ├── recommendations
│ │ ├── searchMedia
│ │ ├── socialSection
│ │ ├── statsAndFacts
│ │ └── trailer
│ │ └── tvDetails
│ ├── pages
│ ├── utils
│ ├── index.css
│ ├── main.tsx
│ ├── routes.tsx
│ └── vite-env.d.ts
├── .env
├── .prettierrc
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## Project Demo

[![Project Demo](https://img.youtube.com/vi/wmSLXi3hk7c/0.jpg)](https://www.youtube.com/watch?v=wmSLXi3hk7c)


## Screenshots

- Mobile view :

![iPhone 12 Pro-1708878779572](https://github.com/Shivakarka/tmdb/assets/64298475/7291e4cd-709a-46a1-ab3c-9777808b25cf)

![iPhone 12 Pro-1708882505341](https://github.com/Shivakarka/tmdb/assets/64298475/a97fee74-dbb1-465d-9062-6c40054d959b)

![iPhone 12 Pro-1708882514392](https://github.com/Shivakarka/tmdb/assets/64298475/63ef66af-2486-4a1d-9c08-bc867a312518)


- Tablet view :
  

![iPad-1708879034210](https://github.com/Shivakarka/tmdb/assets/64298475/110c2e8c-d5c0-4680-a676-1725e65f5cd5)


- Desktop view :


![Macbook Pro-tmdb](https://github.com/Shivakarka/tmdb/assets/64298475/93163cdd-32fc-47e8-8bd3-f0fafee143d8)


- Lighthouse Performance

![lighthouse-tmdb](https://github.com/Shivakarka/tmdb/assets/64298475/9106b0d3-feb4-479a-a09c-c2cfc5c62d9b)



