import React from "react";

interface PropsInterface {
  label: string;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  step: number;
}

const Range: React.FC<PropsInterface> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
}) => {
  return (
    <div className="flex flex-col text-center gap-1">
      <div className="text-gray-400 font-medium text-md">{label}</div>
      <input
        className="accent-primarily "
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
};

export default Range;
