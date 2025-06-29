import './kintaroTextBox1.css';

const KintaroTextBox1 = ({ value, onChange, title, type }) => {
    return (
        <input
            className="kintaro-txtbox-1-textbox"
            type={type}
            placeholder={title}
            value={value}
            onChange={onChange}
        />
    );
};

export default KintaroTextBox1;
