import './kintaroButton1.css';

const KintaroButton1 = ({
    children,
    width,
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-1 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                width: width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton1;