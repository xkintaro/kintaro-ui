import { React, useState } from 'react';
import './kintaroDescription.css';

const KintaroDescription = ({
    text,
    maxLength,
    showToggleButton = true,
    textAlign = 'left',
    textAlignMobile
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldTruncate = text?.length > maxLength;
    const displayedText = isExpanded || !shouldTruncate
        ? text
        : `${text.slice(0, maxLength)}...`;

    return (
        <div className="kintaro-description"
            style={{
                '--custom-text-align': textAlign,
                '--custom-text-align-mobile': textAlignMobile || textAlign
            }}>
            <p className="kintaro-description-text" >
                {displayedText}
            </p>
            {showToggleButton && shouldTruncate && (
                <button
                    title={isExpanded ? "Daha Az Göster" : "Daha Fazla Göster"}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="kintaro-description-button"
                >
                    {isExpanded ? "Daha Az Göster" : "Daha Fazla Göster"}
                </button>
            )}
        </div>
    );
};

export default KintaroDescription;