import './kintaroTitle2.css'

const KintaroTitle2 = ({ title, color }) => {
    const style = color ? { color: color } : {};
    
    return (
        <h1 
            className="kintaro-title-reset kintaro-title-2" 
            title={title}
            style={style}
        >
            {title}
        </h1>
    );
};

export default KintaroTitle2;