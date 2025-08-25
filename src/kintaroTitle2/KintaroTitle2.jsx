import './kintaroTitle2.css'

const KintaroTitle2 = ({
    children,
    color,
    width,
    textAlign = 'left',
    textAlignMobile,
    className = '',
}) => {

    return (
        <h2
            className={`kintaro-title-reset kintaro-title-2 ${className}`}
            style={{
                color: color,
                maxWidth: width,
                '--custom-text-align': textAlign,
                '--custom-text-align-mobile': textAlignMobile || textAlign
            }}>
            {children}
        </h2>
    );
};

export default KintaroTitle2;