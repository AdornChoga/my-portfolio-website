import awesomeBooksDesktop from '../../../assets/images/awesome-books-desktop.png';
import awesomeBooksMobile from '../../../assets/images/awesome-books-mobile.png';
import cinemaStreamDesktop from '../../../assets/images/cinema-stream-desktop.png';
import cinemaStreamMobile from '../../../assets/images/cinema-stream-mobile.png';
import leaderboardDesktop from '../../../assets/images/leaderboard-desktop.png';
import leaderboardMobile from '../../../assets/images/leaderboard-mobile.png';
import budgetPalDesktop from '../../../assets/images/budget-app-desktop.png';
import budgetPalMobile from '../../../assets/images/budget-app-mobile.png';
import resortsBookingDesktop from '../../../assets/images/resorts-booking-desktop.png';
import resortsBookingMobile from '../../../assets/images/resorts-booking-mobile.png';

const projects = [
  {
    name: 'Awesome Books',
    description:
      'Awesome Books is a personal book library. It allows users to add and remove books from their library by simply clicking add or remove book buttons.',
    mobileImage: awesomeBooksMobile,
    desktopImage: awesomeBooksDesktop,
    liveLink: 'https://adoring-blackwell-63e3e2.netlify.app/',
    githubLink: 'https://github.com/AdornChoga/Awesome-Books-ES6',
    techStack: [
      'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    ],
  },
  {
    name: 'Cinema Stream',
    description:
      'Cinema-Stream is website for viewing movies and series information e.g likes, comments, cover photo, description etc. The website uses TvMaze API for fetching information about the movies and series displayed on the site.',
    mobileImage: cinemaStreamMobile,
    desktopImage: cinemaStreamDesktop,
    liveLink: 'https://stoic-albattani-63ea15.netlify.app/',
    githubLink: 'https://github.com/AdornChoga/Javascript_Capstone',
    techStack: [
      'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    ],
  },
  {
    name: 'LeaderBoard',
    description:
      "The leaderboard is a website for recording and storing games their respective scores. The data entered by the user is sent to a Leaderboard API and sourced from the same API to be displayed on the UI. The user's browser local storage is used to store the id for creating the endpoint for the API.",
    mobileImage: leaderboardMobile,
    desktopImage: leaderboardDesktop,
    liveLink: 'https://elegant-easley-3451a9.netlify.app',
    githubLink: 'https://github.com/AdornChoga/Leaderboard',
    techStack: [
      'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    ],
  },
  {
    name: 'Budget Pal',
    description:
      'Budget Pal is a building a mobile web application where users can manage their budget: they have a list of transactions associated with a category, so that they can see how much money they spent and on what.',
    mobileImage: budgetPalMobile,
    desktopImage: budgetPalDesktop,
    liveLink: 'https://budget-pal-rails.herokuapp.com',
    githubLink: 'https://github.com/AdornChoga/budget-app',
    techStack: [
      'https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white',
      'https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white',
      'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
    ],
  },
  {
    name: 'Resorts Booking',
    description:
      'In this app, users can see available resorts, reserve resorts, and see own reservations. Users with admin role can also create, update and delete resorts.',
    mobileImage: resortsBookingMobile,
    desktopImage: resortsBookingDesktop,
    liveLink: 'https://resorts-booking.netlify.app',
    githubLink:
      'https://github.com/banlon-jones/booking-appointment-react-frontend',
    techStack: [
      'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
      'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
      'https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white',
      'https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white',
    ],
  },
];

export default projects;
