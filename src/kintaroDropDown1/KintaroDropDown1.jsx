import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';
import './kintaroDropDown1.css'

const KintaroDropDown1 = ({
    options,
    placeholder = "Select an option",
    onSelect,
    onChange,
    value,
    width
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const matchedOption = options.find(option => option.value === value);
        setSelectedOption(matchedOption || null);
    }, [value, options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect && onSelect(option);
        onChange && onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="kintaro-dropdown-container" ref={dropdownRef}
            style={{
                width: width
            }}>
            <div
                className={`kintaro-dropdown-trigger ${isOpen ? 'kintaro-dropdown-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`kintaro-dropdown-placeholder ${selectedOption ? 'kintaro-dropdown-selected' : ''}`}>
                    {selectedOption?.label || placeholder}
                </span>
                <FiChevronDown
                    className={`kintaro-dropdown-icon ${isOpen ? 'kintaro-dropdown-icon-open' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="kintaro-dropdown-menu">
                    <div className="kintaro-dropdown-menu-inner">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`kintaro-dropdown-item ${selectedOption?.value === option.value ? 'kintaro-dropdown-item-selected' : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                <span>{option.label}</span>
                                {selectedOption?.value === option.value && (
                                    <FiCheck className="kintaro-dropdown-check-icon" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default KintaroDropDown1;