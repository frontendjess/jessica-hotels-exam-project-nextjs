# FEU2 Final Exam Project 2022 by Jessica - A curated hotels booking website; Holidaze for the Urban Traveler

![image](https://raw.githubusercontent.com/frontendjess/repoimagesportfolio/main/images/holidazehotelsnextjs-mockup.png)

A case study to make a hotel booking website.

Concept: Curated collection of hotels for the urban traveler. Merging the golden era of travel with today’s innovation, sustainability, authenticity and comfort.

## Login information

- admin login page https://holidazefortheurbantraveler.netlify.app/login
- username: admin@admin.com
- password: #Admin1234

## Description

Goal: To take the skills learned over the last 2 years and take on an extensive project where the finished product should reflect our general development capabilities, in addition to visual and technical skills. Website is fully responsive.

Links:

- Live website: https://holidazefortheurbantraveler.netlify.app/
- Github repo: https://github.com/frontendjess/jessica-hotels-exam-project-nextjs
- Hotel API database: https://hotels-api-holidaze-jessica.herokuapp.com/api/hotels
- General enquiries: https://hotels-api-holidaze-jessica.herokuapp.com/api/general-enquiries
- Hotel booking enquiries: https://hotels-api-holidaze-jessica.herokuapp.com/api/hotel-enquiries
- Hotel API Strapi Github: https://github.com/frontendjess/hotelsHolidazeApi/
- Gant chart: https://brash-innovation-38e.notion.site/f3785e8c67cf4bf1bf814070aa78d577?v=995b0bdff3dc4d5fabb8bcd1269264d5
- Figma prototype with style guide and moodboard: https://www.figma.com/file/7Fv0PmS8bYTh4ItBQ7e6WK/Holidaze?node-id=166%3A462
- Report https://docs.google.com/document/d/1LyVcvgmqgF5O-skLCE8vdfSV2cN-2rBaAuClVU5LsW0/edit?usp=sharing

Sidenote: Please give a moment for the api load - I am using free account on Heroku thank you :)

Requirements for the website:

- Visitor side

  - Homepage
  - Searchbar typeahead
  - A resuls pate with all hotels
  - The hotel specific page which displays all details about the hotel
  - An enquiry page
  - A contact page (different to enquiry page) which goes to the admin for Holidaze

- Admin side
  - Login section that makes use of JWT tokens
  - List of enquiries and new enquiries appear when user submits the form on the enquiry page
  - List of messages from contact form
  - Admin can create a new establishment

Extra features I have added:

- On the homepage hero section there are 3 city links as a design feature, you can hover your mouse (using React useState) and extra information regarding that city and the curated hotels will appear on onmouseenter and dissapear on onmouseleave.
- There is a hotel search form on the homepage hero section as well as the specific hotels pages.
- Datepicker in the search form.
- There is a design feature of "Always at Holidaze" showing the sustainability features of the hotels that can be found in all the curated hotels of Holidaze - using Fontawesome icons.
- The design and branding was a big part of my feature, as I wanted to create a concept that followed through of innovation, sustainability, authenticity and comfort.
- Logo was created in Canva and prototype was created in Figma.

## Built With

My project was built in Next.js, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using Axios to send GET and POST requests, Heroku to deploy my API, headless CMS Strapi to build my API database, React-Select for my form, Styled-Components and Styled-Media-Query for styling, and Fontawesome for icons.

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Heroku](https://www.heroku.com/)
- [Strapi](https://strapi.io/)
- [React-Select](https://react-select.com/home)
- [Styled-Components](https://styled-components.com/)
- [Styled-Media-Query](https://www.npmjs.com/package/styled-media-query)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:frontendjess/jessica-hotels-exam-project-nextjs.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Contributing

Due to this project being for school, contributions are not needed. However, if you would like to make my project better, for fun, open a pull request so I can review your code. Thanks.

## Contact

You can find me on my portfolio

[Personal Portfolio](https://jessicadevportfolio.netlify.app/)

## Acknowledgments

Design:

- Unsplash images which are hosted in this [Github repo](https://github.com/frontendjess/hotelsProjectImages/) and can be found in this [collection](https://unsplash.com/collections/TInToixTclk/holidaze/)
- Vector scribbles that I used in my homepage and hotels page [Scribbbles.design](https://scribbbles.design/)

Code:

- I learned how to do a React autoacomplete search form by [CKmobile](https://www.youtube.com/watch?v=Q2aky3eeO40/) & by [Georgey V B on LogRocket](https://blog.logrocket.com/create-search-bar-react-from-scratch/)
