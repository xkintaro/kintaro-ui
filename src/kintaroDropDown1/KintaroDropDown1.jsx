import { useState, useRef, useEffect } from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';
import './kintaroDropDown1.css'

const KintaroDropDown1 = ({
    options,
    placeholder = "Select an option",
    onSelect,
    onChange,
    value,
    selectedValue,  // New prop for controlled selection
    width
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Determine the selected option based on props
    const getSelectedOption = () => {
        // Priority to selectedValue prop if provided
        if (selectedValue !== undefined) {
            return options.find(option => option.value === selectedValue) || null;
        }
        // Fallback to value prop (for backward compatibility)
        if (value !== undefined) {
            return options.find(option => option.value === value) || null;
        }
        return null;
    };

    const selectedOption = getSelectedOption();

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