import React, { useState } from 'react';

const QuestionsForm = () => {
    const [questions, setQuestions] = useState(['', '', '']);

    const handleChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const addQuestionField = () => {
        setQuestions([...questions, '']);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you would typically send the questions to your API
        console.log(questions);
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
            <button type="button" onClick={addQuestionField}>
                Add More Questions
            </button>
            <button type="submit">Submit Questions</button>
        </form>
    );
};

export default QuestionsForm;