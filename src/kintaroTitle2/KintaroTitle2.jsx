import './kintaroTitle2.css'

const KintaroTitle2 = ({
    children,
    color,
    width,
    textAlign = 'left',
    textAlignMobile
}) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-2"
            style={{
                color: color,
                maxWidth: width,
                '--custom-text-align': textAlign,
                '--custom-text-align-mobile': textAlignMobile || textAlign
            }}>
            {children}
        </h1>
    );
};

export default KintaroTitle2;