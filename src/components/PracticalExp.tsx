import React, { type ChangeEvent } from "react";

interface PracticalExpProps {
    onDataChange: (data: {
        company?: string;
        position?: string;
        jobDescription?: string;
    }) => void;
    practicalExpFormData: {
        company: string;
        position: string;
        jobDescription: string;
    };
}

const PracticalExp = ({
    practicalExpFormData,
    onDataChange,
}: PracticalExpProps) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onDataChange({ [name]: value });
    };

    return (
        <>
            <div className="practical-exp-container">
                <h3>Practical Experience</h3>
                <div className="practical-exp-form-container">
                    <form className="practical-exp-form">
                        <input
                            name="company"
                            type="text"
                            className="company-input"
                            placeholder="Type your company"
                            value={practicalExpFormData.company}
                            onChange={handleInputChange}
                        />
                        <input
                            name="position"
                            type="text"
                            className="position-input"
                            placeholder="Type your job position"
                            value={practicalExpFormData.position}
                            onChange={handleInputChange}
                        />
                        <input
                            name="jobDescription"
                            type="text"
                            className="job-description-input"
                            placeholder="Type your job description"
                            value={practicalExpFormData.jobDescription}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default PracticalExp;
