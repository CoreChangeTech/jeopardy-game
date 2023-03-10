# Jeopardy game

This game is built on [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements
1. nvm && node (https://heynode.com/tutorial/install-nodejs-locally-nvm/)
2. yarn (https://classic.yarnpkg.com/lang/en/docs/install/)
3. Git (https://github.com/git-guides/install-git)

## Getting Started

First, run the development server:

```bash
git clone git@github.com:CoreChangeTech/jeopardy-game.git
# then
cd jeopardy-game
# then
nvm use
# then
yarn
# then
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## Resources

The following resources should help you to complete the tasks:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Learn Git] (https://www.atlassian.com/git)


## Task questions
Once you are able to run the game locally, create a Git feature branch and complete the following tasks. Name your feature branch in the following format `[firstname]/corechange-task`. Ask for help if you are not able to run the game locally.

1. Use buttons for the bottom links 'Finale' and 'Jingle'
2. Replace the branding colors to colors of your choice.
3. When a team name is added, at the moment it is not possible to make any changes. Add a link to edit the team name, and allow the user to change the name.
4. Add a link to remove a team, allow the user to remove a team.
5. At the moment, questions are loaded from a static json file. NextJS has functionality to build backend functionality that can be used as APIs for content (https://nextjs.org/docs/api-routes/introduction).
  - Use such a route described above to to mock the questions, so they appear to be loaded from an API.
  - Update the mocked questions by adding a category.
  - Update the mocked questions by removing a category.
