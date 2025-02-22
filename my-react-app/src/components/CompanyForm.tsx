import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";

const CompanyForm: React.FC = () => {
  const [companyName, setCompanyName] = useState("");
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    history.push("/questions", { companyName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default CompanyForm;
