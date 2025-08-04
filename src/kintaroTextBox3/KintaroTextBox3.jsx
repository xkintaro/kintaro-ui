import { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import './kintaroTextbox3.css';

const KintaroTextBox3 = ({
    width = '100%',
    title = 'Your text here',
    disabled = false,
    ...props
}) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    return (
        <div className="kintaro-floating-layout"
            style={{
                maxWidth: width
            }}>

            <input
                {...props}
                className={`kintaro-txtbox-3 ${disabled ? 'kintaro-txtbox-3-disabled' : ''}`}
                type={passwordVisible ? 'text' : 'password'}
                placeholder=""
            />
            <label
                className={`kintaro-txtbox-3-label ${disabled ? 'kintaro-txtbox-3-label-disabled' : ''}`}
            >
                {title}
            </label>

            {passwordVisible ? (
                <svg
                    onClick={togglePasswordVisibility}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className={`kintaro-txtbox-3-icon ${disabled ? 'kintaro-txtbox-3-icon-disabled' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="256" cy="256" r="64" />
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z" />   </svg>
            ) : (
                <svg
                    onClick={togglePasswordVisibility}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`kintaro-txtbox-3-icon ${disabled ? 'kintaro-txtbox-3-icon-disabled' : ''}`}
                >
                    <path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448zM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39zm16-119.7L315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39z" />
                    <path d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4zM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352z" />
                </svg>
            )}
        </div>
    );
};

export default KintaroTextBox3;