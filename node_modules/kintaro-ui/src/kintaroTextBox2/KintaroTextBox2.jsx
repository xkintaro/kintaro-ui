import './kintaroTextBox2.css';

const KintaroTextBox2 = ({ value, onChange, title, type }) => {
    return (
        <div className="kintaro-floating-layout">
            <input
                className="kintaro-txtbox-2-textbox"
                type={type}
                placeholder=""
                value={value}
                onChange={onChange}
            />
            <label className="kintaro-txtbox-2-label">{title}</label>
        </div>
    );
};

export default KintaroTextBox2;
