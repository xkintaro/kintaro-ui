import './kintaroTextBox2.css';

const KintaroTextBox2 = ({
    width = '100%',
    title = 'Your text here',
    disabled = false,
    ...props
}) => {
    return (
        <div
            className={`kintaro-floating-layout ${disabled ? 'kintaro-floating-layout-disabled' : ''}`}
            style={{
                maxWidth: width,
            }}
        >
            <input
                {...props}
                className={`kintaro-txtbox-2 ${disabled ? 'kintaro-txtbox-2-disabled' : ''}`}
                disabled={disabled}
                placeholder=""
            />
            <label className={`kintaro-txtbox-2-label ${disabled ? 'kintaro-txtbox-2-label-disabled' : ''}`}>
                {title}
            </label>
        </div>
    );
};

export default KintaroTextBox2;