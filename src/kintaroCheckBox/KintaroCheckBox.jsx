import './kintaroCheckBox.css'

const KintaroCheckBox = ({
    checked = false,
    onChange,
    disabled = false,
}) => {
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
        </label>
    );
};

export default KintaroCheckBox;