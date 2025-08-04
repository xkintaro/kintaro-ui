import './kintaroButton4.css';

const KintaroButton4 = ({
    children,
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-4 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton4;