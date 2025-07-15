import { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import './kintaroTextbox3.css';

const KintaroTextBox3 = ({ width, value, onChange, title }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

    return (
        <div className="kintaro-floating-layout">

            <input
                className="kintaro-txtbox-3-textbox"
                type={passwordVisible ? 'text' : 'password'}
                placeholder=""
                value={value}
                onChange={onChange}
                style={{
                    width: width
                }}
            />
            <label className="kintaro-txtbox-3-label">{title}</label>

            {passwordVisible ? (
                <IoEyeOff className="kintaro-txtbox-3-icon" onClick={togglePasswordVisibility} />
            ) : (
                <IoEye className="kintaro-txtbox-3-icon" onClick={togglePasswordVisibility} />
            )}

        </div>
    );
};

export default KintaroTextBox3;