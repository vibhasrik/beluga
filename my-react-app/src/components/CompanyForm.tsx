import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CompanyForm: React.FC = () => {
    const [companyName, setCompanyName] = useState('');
    const history = useHistory();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // You can add additional logic here if needed
        history.push('/questions');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input
                    type="text"
                    id="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
            </div>
            {/* Additional questions can be added here */}
            <button type="submit">Next</button>
        </form>
    );
};

export default CompanyForm;