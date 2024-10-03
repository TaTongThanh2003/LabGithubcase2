import React from "react";
import { FiPlus, FiMinus, FiX, FiDivide } from "react-icons/fi";

interface KeypadProps {
  inputDigit: (digit: number) => void;
  inputDecimal: () => void;
  clearDisplay: () => void;
  performOperation: (nextOperator: string) => void;
}
// thành làm việc ở đây
const Keypad: React.FC<KeypadProps> = ({
  inputDigit,
  inputDecimal,
  clearDisplay,
  performOperation,
}) => {
  return (
    <div className="grid grid-cols-4 gap-1 p-4">
      <button
        onClick={clearDisplay}
        className="col-span-3 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
      >
        Clear
      </button>
      <button
        onClick={() => performOperation("/")}
        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
      >
        <FiDivide className="mx-auto" />
      </button>
      {[7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => inputDigit(num)}
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => performOperation("*")}
        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
      >
        <FiX className="mx-auto" />
      </button>
      {[4, 5, 6].map((num) => (
        <button
          key={num}
          onClick={() => inputDigit(num)}
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => performOperation("-")}
        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
      >
        <FiMinus className="mx-auto" />
      </button>
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => inputDigit(num)}
          className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => performOperation("+")}
        className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
      >
        <FiPlus className="mx-auto" />
      </button>
      <button
        onClick={() => inputDigit(0)}
        className="col-span-2 bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
      >
        0
      </button>
      <button
        onClick={inputDecimal}
        className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition-colors"
      >
        .
      </button>
      <button
        onClick={() => performOperation("=")}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
      >
        =
      </button>
    </div>
  );
};

export default Keypad;
