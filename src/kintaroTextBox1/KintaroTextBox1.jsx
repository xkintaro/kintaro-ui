import './kintaroTextBox1.css';

const KintaroTextBox1 = ({
    width = '100%',
    height = '60px',
    placeholder = 'Your text here',
    disabled = false,
    ...props }) => {
    return (
        <input
            {...props}
            className={`kintaro-txtbox-1 ${disabled ? 'kintaro-txtbox-1-disabled' : ''}`}
            placeholder={placeholder}
            style={{
                height: height,
                maxWidth: width
            }}
        />
    );
};

export default KintaroTextBox1;