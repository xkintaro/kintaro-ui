import './kintaroCheckBox.css'

const KintaroCheckBox = ({ checked = false, onChange, title = "", disabled = false }) => {
    return (
        <label className='kintaro-checkbox-layout'>
            <input
                className='kintaro-checkbox'
                type='checkbox'
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <span className='kintaro-checkmark'></span>
            <span>{title}</span>
        </label>
    );
};

export default KintaroCheckBox;
