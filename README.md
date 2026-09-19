# 🤖 AI Study Buddy

AI Study Buddy is an AI-powered educational web application that helps
students study from their own notes. Students can enter or upload notes,
generate questions using AI, practice questions, take MCQ quizzes,
calculate scores, and review correct answers.

## 📌 Project Objective

The main objective of **AI Study Buddy** is to make studying easier,
interactive, and personalized by converting student study material into
useful questions and quizzes.

## ✨ Main Features

### 📝 Notes Management

-   Enter or paste study notes
-   Upload study files
-   Store notes for later use

### 🤖 AI Question Generation

-   Generate questions from notes
-   Generate multiple-choice questions (MCQs)
-   Generate practice questions
-   Select question difficulty

### 🧠 Practice

-   Practice questions generated from study material
-   Review questions and answers

### 📝 MCQ Quiz

-   Start a basic quiz
-   Select answers
-   Move between questions
-   Submit the quiz

### 📊 Score Calculation

After submitting the quiz, the system displays: - Total questions -
Correct answers - Wrong answers - Score - Percentage

### ✅ Correct Answer Review

Students can review their answers and compare them with the correct
answers.

## 🔄 Project Workflow

``` text
Student
   ↓
Register / Login
   ↓
Dashboard
   ↓
Enter / Upload Notes
   ↓
Save Notes in MongoDB
   ↓
AI Processes Notes
   ↓
Generate Questions / MCQs
   ↓
Practice or Start Quiz
   ↓
Student Answers Questions
   ↓
Submit Quiz
   ↓
Calculate Score
   ↓
Show Result
   ↓
Correct Answer Review
```

## 🛠️ Technologies Used

  Technology       Purpose
  ---------------- ------------------------------------
  HTML             Frontend structure
  CSS              Styling and UI
  JavaScript       Frontend functionality
  Node.js          Backend runtime
  Express.js       Backend server and REST APIs
  MongoDB          Database
  Mongoose         MongoDB connection and data models
  AI API           AI question generation
  Thunder Client   API testing
  Git & GitHub     Version control

## 📁 Project Structure

``` text
AI-Study-Buddy/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── notes.html
│   ├── quiz.html
│   ├── result.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Note.js
│   │   ├── Question.js
│   │   ├── Quiz.js
│   │   └── Result.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── noteRoutes.js
│   │   ├── questionRoutes.js
│   │   ├── quizRoutes.js
│   │   └── resultRoutes.js
│   │
│   └── controllers/
│       ├── userController.js
│       ├── noteController.js
│       ├── questionController.js
│       └── quizController.js
│
├── .gitignore
└── README.md
```

> Adjust the structure above if your actual project contains different
> files or folders.

## 🗄️ Database

The project uses **MongoDB** to store application data.

### Database Name

``` text
aiStudyBuddy
```

### Collections

``` text
aiStudyBuddy
│
├── users
├── notes
├── questions
├── quizzes
└── results
```

### Collection Details

  Collection    Purpose
  ------------- -----------------------------------------
  `users`       Stores student registration information
  `notes`       Stores student notes
  `questions`   Stores AI-generated questions
  `quizzes`     Stores quiz information
  `results`     Stores quiz scores and results

### Database Relationship

``` text
USER
 │
 ├── creates → NOTES
 │               │
 │               └── generates → QUESTIONS
 │
 └── attempts → QUIZ
                   │
                   └── produces → RESULT
```

## ⚙️ Installation

### 1. Clone the Repository

``` bash
git clone https://github.com/YOUR-USERNAME/AI-Study-Buddy.git
```

Then:

``` bash
cd AI-Study-Buddy
```

### 2. Open the Backend

``` bash
cd backend
```

### 3. Install Dependencies

``` bash
npm install
```

If dependencies have not been added yet:

``` bash
npm install express mongoose dotenv bcryptjs
npm install --save-dev nodemon
```

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

For local MongoDB:

``` env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/aiStudyBuddy
AI_API_KEY=YOUR_AI_API_KEY
```

For MongoDB Atlas, replace `MONGO_URI` with your MongoDB Atlas
connection string.

### Important

Do **not** upload `.env` to GitHub.

Add the following to `.gitignore`:

``` text
node_modules/
.env
```

Never publish: - MongoDB passwords - Database connection strings
containing passwords - AI API keys - Other private credentials

## ▶️ Run the Backend

Development mode:

``` bash
npm run dev
```

Or:

``` bash
npm start
```

The backend should run at:

``` text
http://localhost:5000
```

A basic test route can be:

``` text
GET http://localhost:5000/
```

Expected response:

``` text
AI Study Buddy API is Running
```

## 🔌 API Endpoints

### User APIs

  Method   Endpoint                Description
  -------- ----------------------- ------------------------
  POST     `/api/users/register`   Register a new student
  POST     `/api/users/login`      Login student

### Notes APIs

  Method   Endpoint           Description
  -------- ------------------ ---------------
  POST     `/api/notes`       Add notes
  GET      `/api/notes`       Get notes
  GET      `/api/notes/:id`   Get one note
  DELETE   `/api/notes/:id`   Delete a note

### Question APIs

  Method   Endpoint                    Description
  -------- --------------------------- -----------------------------
  POST     `/api/questions/generate`   Generate questions using AI
  GET      `/api/questions/:noteId`    Get questions for a note

### Quiz APIs

  Method   Endpoint             Description
  -------- -------------------- ------------------
  POST     `/api/quizzes`       Create a quiz
  GET      `/api/quizzes/:id`   Get quiz details

### Result APIs

  Method   Endpoint                      Description
  -------- ----------------------------- -------------------------
  POST     `/api/results`                Save quiz result
  GET      `/api/results/user/:userId`   Get user's quiz history

> Update these endpoint names if your actual backend uses different
> routes.

## 🧪 API Testing

You can use **Thunder Client** or **Postman** to test the APIs.

### Register Example

**Method:**

``` text
POST
```

**URL:**

``` text
http://localhost:5000/api/users/register
```

**Body:**

``` json
{
  "name": "Student",
  "email": "student@example.com",
  "password": "123456"
}
```

### Add Notes Example

**Method:**

``` text
POST
```

**URL:**

``` text
http://localhost:5000/api/notes
```

**Body:**

``` json
{
  "title": "Computer Network",
  "content": "OSI model contains seven layers."
}
```

## 🤖 AI Question Generation

The AI module takes student notes and generates questions.

Example input:

``` text
OSI Model is a conceptual model.
It has seven layers.
The layers help describe network communication.
```

The AI can generate:

``` text
Question:
How many layers are present in the OSI Model?

A) 5
B) 6
C) 7
D) 8

Correct Answer:
C
```

The generated questions can then be stored in MongoDB and used in
practice or quizzes.

## 📊 Quiz Result Example

After completing a quiz:

``` text
-----------------------------
        QUIZ RESULT
-----------------------------

Total Questions : 10
Correct Answers : 8
Wrong Answers   : 2
Score           : 8/10
Percentage      : 80%

-----------------------------
```

## 🎯 Project Modules

### Module 1 -- User Management

Registration and login.

### Module 2 -- Notes Management

Add, upload, view, and manage study notes.

### Module 3 -- AI Question Generation

Generate questions and MCQs from notes.

### Module 4 -- Practice

Practice generated questions.

### Module 5 -- Quiz

Take an MCQ quiz.

### Module 6 -- Result

Calculate and display quiz performance.

### Module 7 -- Review

Review answers and identify incorrect answers.

## 🚀 Development Plan

### Phase 1

-   Set up Node.js
-   Set up Express
-   Connect MongoDB
-   Test server

### Phase 2

-   Create User model
-   Create registration API
-   Create login API

### Phase 3

-   Create Notes model
-   Add Notes API
-   Display saved notes

### Phase 4

-   Connect AI API
-   Generate questions
-   Save generated questions

### Phase 5

-   Build quiz interface
-   Add answer selection
-   Calculate score

### Phase 6

-   Create result page
-   Add correct-answer review
-   Save quiz history

### Phase 7

-   Improve UI
-   Add validation
-   Test complete application

## 🔒 Security

The application should: - Keep secrets inside `.env` - Hash user
passwords - Validate user input - Protect authenticated routes -
Validate uploaded files - Never expose API keys in frontend code

## 🐛 Common Errors

### MongoDB Connection Error

Check: - MongoDB is running for local setup - `MONGO_URI` is correct -
MongoDB Atlas network access is configured - Username and password are
correct for Atlas

### `Cannot find module`

Run:

``` bash
npm install
```

### `npm.ps1 cannot be loaded`

On Windows PowerShell, this can be caused by the PowerShell execution
policy. Use an appropriate PowerShell execution-policy setting for your
development environment or run npm from Command Prompt.

### Port Already in Use

Change:

``` env
PORT=5000
```

to another available port.

## 📈 Future Enhancements

-   JWT authentication
-   PDF/DOCX note extraction
-   More AI question types
-   Personalized study recommendations
-   Performance dashboard
-   Topic-wise performance
-   Quiz timer
-   Leaderboard
-   Dark mode
-   Mobile responsive design
-   Voice-based study assistant
-   Progress tracking

## 🎓 Project Type

**Academic / Educational AI Project**

## 👨‍💻 Author

**Your Name**

Replace `Your Name` with your actual name before publishing the
repository.

## 📄 License

This project is created for educational and academic purposes.
