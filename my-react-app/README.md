# My React App

This project is a simple React application that allows users to input their company name and a series of questions. The application consists of two main forms: one for entering the company name and another for entering questions.

## Project Structure

```
my-react-app
├── public
│   ├── index.html         # Main HTML file
├── src
│   ├── components
│   │   ├── CompanyForm.tsx  # Component for company name input
│   │   ├── QuestionsForm.tsx # Component for questions input
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the React application
│   └── services
│       └── api.ts          # API service for database interactions
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- The application will prompt you to enter your company name.
- After submitting the company name, you will be directed to a form where you can enter up to three questions.
- You can add more question fields dynamically by clicking the "Add Question" button.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see!