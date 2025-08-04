import './kintaroButton4.css';

const KintaroButton4 = ({
    children,
    color,
    hoverColor = 'var(--kintaro-hover)',
    className = '',
    style = {},
    ...props
}) => {
    return (
        <button
            {...props}
            className={`kintaro-button-reset kintaro-button-4 ${className}`}
            style={{
                color,
                '--kintaro-custom-hover': hoverColor,
                ...style
            }}>
            {children}
        </button>
    );
};

export default KintaroButton4;