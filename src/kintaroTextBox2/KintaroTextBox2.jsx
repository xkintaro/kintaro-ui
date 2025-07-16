import './kintaroTextBox2.css';

const KintaroTextBox2 = ({ width, value, onChange, title, type }) => {
    return (
        <div className="kintaro-floating-layout"
            style={{
                maxWidth: width
            }}>
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
