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
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className={`kintaro-txtbox-3-icon ${disabled ? 'kintaro-txtbox-3-icon-disabled' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z" />
                </svg>
            ) : (
                <svg
                    onClick={togglePasswordVisibility}
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className={`kintaro-txtbox-3-icon ${disabled ? 'kintaro-txtbox-3-icon-disabled' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z" />
                </svg>
            )}
        </div>
    );
};

export default KintaroTextBox3;