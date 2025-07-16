import './kintaroTitle2.css'

const KintaroTitle2 = ({ title, color, textAlign, width }) => {

    return (
        <h1
            className="kintaro-title-reset kintaro-title-2"
            title={title}
            style={{
                textAlign: textAlign,
                color: color,
                maxWidth: width
            }}>
            {title}
        </h1>
    );
};

export default KintaroTitle2;