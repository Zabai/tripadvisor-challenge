# Frontend Coding Challenge

## Description

### Mission

Your mission is to create a web app that allows users to: search for places in a location given by the user using the Foursquare API, view their search results and view the individual details of each search result. We want you to make the view/s you need to represent that information in the way you think would be better based on your UX/UI criterias.

An example of a user story would be:

> A user wants to look for the highest rated Pizza restaurants in Las Palmas de Gran Canaria and check the time schedule and its location.

### Requirements

1. The search inputs should use industry best practices to perform a typeahead search against the Foursquare API.
2. Search results should show basic information at a minimum, the name of the place (i.e., Turtle Ninja’s Pizza), the category of the place (i.e., Italian Restaurants), the icon from the API response, the distance from the current user position and how many people are there based on the info from the API response. Click an item should launch the detailed view of that place.
3. The detailed view for a place should show a map to represent the place location (for example, using Google Maps) and all the details about the place.
4. The user should be able to navigate between all the views according to web development conventions.
5. Include instructions for building and installing the application and any other relevant information it needs to have in consideration in a README.md file.
6. Please upload your solution to Github, Bitbucket or Gitlab.

### Ideas

The ideas listed below are all optional and you should feel free to implement either any/all of these or other from your preferences as time permits.
Don’t be shy and let us wow with your application!

1. When a search returns results, the user should be able to launch a full-screen map with a pin for every search result. Clicking a pin should show the name of the place on the map, and clicking on the name should then open the details screen for the given place.
2. In search results, each list item should also indicate whether the place has been favorited by the user. Users should be able to favorite the place from the details screen.
3. Favorite selections should be changeable (i.e., you can favorite/unfavorite a place), should persist across refreshing, and should show correctly on both the search result list and details screens.
4. Include a link to the place’s website (if it exists) on the details screen. Clicking this link should open an external page, (Foursquare provides additional details, including this link, via another API)
   Use any library, framework or tool that fits your technical needs.

### Bonus

1. Show us how Typescript/Flowtype could make code much leaner.
2. Add some UI tests with mocked response

### Resources

You will need to sign up for a free Foursquare account and get an API key to use it. Foursquare has a generous free tier, and the documentation describes integration as well as sample usage.
To display a map, you may use any solution you prefer. We suggest, for convenience, the Google Static Map API for the details screen and the Google Maps Javascript API for the fullscreen map. Both have acceptable free tier limits and are well-documented.
For quick and easy icons, consider using the Material icons.

### Considerations

Among other criterias, your submission will be evaluated on:

1. Implementation of the stated requirements.
2. Application Architecture.
3. The general quality of the code and it’s resistance to crashing.
4. Your use of Javascript, HTML, CSS coding conventions.
5. Knowledge and usage of Javascript/NodeJs libraries and SDKs.
6. Clarity of communications in comments and other documentation.
7. UI and UX -- while we don’t want you to spend any time creating custom icons or other assets, the app should look clean and generally obey the Human Interface Guidelines (equal margins, logical view hierarchy, logical layout constraints...).
8. This isn't just about handling the happy path. Think slow network (or no network at all), responsiveness, etc.
9. Make your web app public. Deploy it using the service of your choice (i.e. AWS, Heroku, Digital Ocean)
10. Coding challenge reviewers should also be able to load your project and run it easily in a local environment. If the reviewer needs to do any project configuration (i.e. add his/her own Google API keys) and can’t just do npm install or similar, that is enough reason to reject your solution.
11. We appreciate there's a lot that is asked in this exercise. If you need more time, feel free to ask. If you need to de-prioritize something, apply the same judgement you would on a professional project, argument your decision.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
