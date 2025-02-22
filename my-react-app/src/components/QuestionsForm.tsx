import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const QuestionsForm: React.FC<{
  location: { state: { companyName: string } };
}> = ({ location }) => {
  const { companyName } = location.state;
  const [questions, setQuestions] = useState(["", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/questions", {
      companyName,
      questions,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <label>
            Question {index + 1}:
            <input
              type="text"
              value={question}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionsForm;

// import React, { useState } from 'react';

// const QuestionsForm = () => {
//     const [questions, setQuestions] = useState(['', '', '']);

//     const handleChange = (index: number, value: string) => {
//         const newQuestions = [...questions];
//         newQuestions[index] = value;
//         setQuestions(newQuestions);
//     };

//     const addQuestionField = () => {
//         setQuestions([...questions, '']);
//     };

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         // Here you would typically send the questions to your API
//         console.log(questions);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {questions.map((question, index) => (
//                 <div key={index}>
//                     <label>
//                         Question {index + 1}:
//                         <input
//                             type="text"
//                             value={question}
//                             onChange={(e) => handleChange(index, e.target.value)}
//                         />
//                     </label>
//                 </div>
//             ))}
//             <button type="button" onClick={addQuestionField}>
//                 Add More Questions
//             </button>
//             <button type="submit">Submit Questions</button>
//         </form>
//     );
// };

// export default QuestionsForm;
