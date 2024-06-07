import { useState } from 'react';

export default function InputSelect({ handleInputChange, options, inputPlaceholder, name, validated, formData, required }) {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <div className="relative w-full">
            <select
                onChange={handleInputChange}
                name={name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full p-3 pt-4 text-lg border border-solid border-gray-300 text-text font-normal rounded outline-none appearance-none focus:border-[#dac895]"
            >
                <option value=""  selected></option>
                {options.map(option => (
                    <option key={option.id}  value={option.value}>{option.value}</option>
                ))}
            </select>
            <label
                className="absolute top-0 left-5 transform -translate-y-1/2  text-gray-500 bg-white px-2"
            >
                {inputPlaceholder}
                {required && validated && !formData[name] && <span className="text-red-600 text-xs my-auto">Campo requerido</span>}
            </label>
        </div>
    );
}
