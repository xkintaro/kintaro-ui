import './kintaroTextBox2.css';

const KintaroTextBox2 = ({
    width = '100%',
    title = 'Your text here',
    type = 'text',
    disabled = false,
    ...props
}) => {
    return (
        <div
            className={`kintaro-floating-layout ${disabled ? 'kintaro-disabled' : ''}`}
            style={{
                maxWidth: width,
            }}
        >
            <input
                {...props}
                className={`kintaro-txtbox-2-textbox ${disabled ? 'disabled' : ''}`}
                type={type}
                placeholder=""
                disabled={disabled}
            />
            <label className={`kintaro-txtbox-2-label ${disabled ? 'disabled' : ''}`}>
                {title}
            </label>
        </div>
    );
};

export default KintaroTextBox2;