import React, { useState, type ChangeEvent } from "react";

interface GeneralInfoProps {
    onDataChange: (data: {
        name?: string;
        email?: string;
        phoneNumber?: string;
    }) => void;
    generalFormData: {
        name: string;
        email: string;
        phoneNumber: string;
    };
}

const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    callback: GeneralInfoProps["onDataChange"]
) => {
    const { name, value } = e.target;
    callback({ [name]: value });
};

const GeneralInfo = ({ generalFormData, onDataChange }: GeneralInfoProps) => {
    return (
        <div className="general-info-container">
            <h3>General Info</h3>
            <div className="general-info-form-container">
                <form className="general-info-form">
                    <input
                        name="name"
                        type="text"
                        className="name-input"
                        placeholder="Type your name"
                        value={generalFormData.name}
                        onChange={(e) => handleInputChange(e, onDataChange)}
                    />
                    <input
                        name="email"
                        type="email"
                        className="email-input"
                        placeholder="Type your email adress"
                        value={generalFormData.email}
                        onChange={(e) => handleInputChange(e, onDataChange)}
                    />
                    <input
                        name="phoneNumber"
                        type="text"
                        className="phone-input"
                        placeholder="Type your phone number"
                        value={generalFormData.phoneNumber}
                        onChange={(e) => handleInputChange(e, onDataChange)}
                    />
                </form>
            </div>
        </div>
    );
};

export default GeneralInfo;
