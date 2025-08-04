import './kintaroTextBox1.css';

const KintaroTextBox1 = ({ height, width, value, onChange, placeholder, type }) => {
    return (
        <input
            className="kintaro-txtbox-1-textbox"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
                height: height,
                maxWidth: width
            }}
        />
    );
};

export default KintaroTextBox1;