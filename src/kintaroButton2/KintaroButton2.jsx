import './kintaroButton2.css';

const KintaroButton2 = ({
    children,
    width,
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-2 ${disabled ? 'kintaro-button-disabled' : ''}`}
            style={{
                width,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton2;