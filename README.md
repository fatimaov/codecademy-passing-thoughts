# Passing Thoughts - React Hooks Practice

This is a small React learning project based on the Codecademy “Passing Thoughts” exercise. The app allows users to create short thoughts that automatically disappear after 15 seconds.  

The goal was to practice state management, side effects, and timing logic using React Hooks, while also setting up the project with Vite and deploying it to Vercel.

🔗 [**Live Demo**](https://codecademy-passing-thoughts.vercel.app/ )


## Features

- Add and manually remove thoughts
- Auto-removal after 15 seconds
- Visible countdown per thought
- Red warning state at 3 seconds
- Bootstrap styling



## What I Practiced

- `useState` and `useEffect`
- Effect cleanup (timers)
- Lazy initialization
- Handling React StrictMode behavior
- Refactoring dual timers into a single countdown source of truth
- Vite dev vs build workflow
- Deployment with Vercel


## Run Locally

```bash
npm install
npm run dev