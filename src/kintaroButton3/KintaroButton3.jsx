import './kintaroButton3.css';

const KintaroButton3 = ({
    children,
    width,
    style = {},
    disabled = false,
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-3 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton3;