import { useState } from "react";

import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExp from "./components/EducationalExp";
import PracticalExp from "./components/PracticalExp";

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    school: string;
    course: string;
    company: string;
    position: string;
    jobDescription: string;
}

function App() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phoneNumber: "",
        school: "",
        course: "",
        company: "",
        position: "",
        jobDescription: "",
    });

    const handleGeneralInfoChange = (update: {
        name?: string;
        email?: string;
        phoneNumber?: string;
    }) => {
        setFormData((prev) => ({ ...prev, ...update }));
    };

    const handleEducationalExpChange = (update: {
        school?: string;
        course?: string;
    }) => {
        setFormData((prev) => ({ ...prev, ...update }));
    };

    const handlePracticalExpChange = (update: {
        company?: string;
        position?: string;
        jobDescription?: string;
    }) => {
        setFormData((prev) => ({ ...prev, ...update }));
    };

    const handleSubmit = () => {
        console.log("Form data: ", formData);
        alert(`
      Form submitted!
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phoneNumber}
      School: ${formData.school}
      Course: ${formData.course}
      Company: ${formData.company}
      Position: ${formData.position}
      Job Description: ${formData.jobDescription}
    `);
    };

    return (
        <>
            <GeneralInfo
                generalFormData={formData}
                onDataChange={handleGeneralInfoChange}
            />
            <EducationalExp
                educationalExpFormData={formData}
                onDataChange={handleEducationalExpChange}
            />
            <PracticalExp
                practicalExpFormData={formData}
                onDataChange={handlePracticalExpChange}
            />
            <button onClick={handleSubmit} className="submit-button">
                Submit Form
            </button>
        </>
    );
}

export default App;
