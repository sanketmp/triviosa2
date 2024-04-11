# Triviosa `v2.0`

A Quiz app. This app will render 10 random questions on Computer Category.

This is updated and improved version of previous [app](https://github.com/sanketmp/triviosa).

# Case Study

## Brief:

The task of developing a Quiz web app for evaluating the users. The app will ask the users a set of questions and will provide them a score at the end. <br/>
Tasks done: Modeling the REST API for the actions like starting the quiz, submitting responses for every
question and finishing the quiz.<br/>
It was recommended to use React for developing this app. So, it fulfilled the purpose of building UI
components from scratch. The web app consumed the
REST APIs designed for fetching the data.

## Screens

The web app has following screens:

### 1. Home:

- The user clicks on the “Start” button to begin with the quiz.
- This created an API request to start a new quiz and fetch questions for it.

### 2. Question:

- This screen shows the questions to the user one after the other
- A question has a single correct choice.
- The user must select at least one option before they can proceed to the next question.
- After the user submits the response for the last question, it will get the score report.

### 3. Report:

- Shows the total score.
- The “Start Again” button allows the user to take the new quiz again from the beginning.
- Scoring: 1 point for each correct answer.

## Learnings

- Writing down proper documentation to run my application locally.
- Deploy the web app online for demonstration purposes, using platforms like Netlify.
- REST guidelines for URL patterns, Request Types, and Response status codes.
- Best practices in whatever frameworks or technologies are chosen.

## The Final Result
Lighthouse stats: <br/>
![Screenshot from 2024-04-11 11-40-24](https://github.com/sanketmp/triviosa2/assets/68698332/97a4a127-5db6-48bf-9440-30dd446c4607)



## Live Demo

[See here](https://trytriviosa.netlify.app/)

## Tech Stack

**Client:** React, Material UI, CSS

**API:** `https://opentdb.com/`

**Improvement added:** Redux, Redux Toolkit, Thunk

## Run Locally

Clone the project

```bash
  git clone https://github.com/sanketmp/triviosa2.git
```

Go to the project directory

```bash
  cd triviosa2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Then, good to go.

## Deployment (if needed)

To build this project run

```bash
  npm run build
```

This will create a `dist` folder. You need to upload this folder to platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com), or any other platform of your choice.
