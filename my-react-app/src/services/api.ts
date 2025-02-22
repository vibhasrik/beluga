export const saveQuestions = async (companyName: string, questions: string[]) => {
    const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName, questions }),
    });

    if (!response.ok) {
        throw new Error('Failed to save questions');
    }

    return await response.json();
};