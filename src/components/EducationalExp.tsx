import React, { type ChangeEvent } from "react";

interface EducationalExpProps {
    onDataChange: (data: { school?: string; course?: string }) => void;
    educationalExpFormData: {
        school: string;
        course: string;
    };
}

const EducationalExp = ({
    educationalExpFormData,
    onDataChange,
}: EducationalExpProps) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onDataChange({ [name]: value });
    };

    return (
        <div className="educational-exp-container">
            <h3>Educational Experience</h3>
            <div className="educational-exp-form-container">
                <form className="educational-exp-form">
                    <input
                        name="school"
                        type="text"
                        className="school-input"
                        placeholder="Type your school"
                        value={educationalExpFormData.school}
                        onChange={handleInputChange}
                    />
                    <input
                        name="course"
                        type="text"
                        className="course-input"
                        placeholder="Type your course"
                        value={educationalExpFormData.course}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default EducationalExp;
