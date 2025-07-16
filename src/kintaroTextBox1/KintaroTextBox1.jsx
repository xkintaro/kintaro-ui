import './kintaroTextBox1.css';

const KintaroTextBox1 = ({ height, width, value, onChange, title, type }) => {
    return (
        <input
            className="kintaro-txtbox-1-textbox"
            type={type}
            placeholder={title}
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
