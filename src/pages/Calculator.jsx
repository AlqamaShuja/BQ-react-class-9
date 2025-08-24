import React, { useState } from 'react';

const Calculator = () => {
    const [value, setValue] = useState("")

    const handleButtonPress = (val) => {
        console.log(val);
        setValue(value + val)
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 text-right text-2xl bg-gray-200 rounded-md outline-none"
            value={value}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="col-span-2 p-3 bg-gray-300 rounded-md hover:bg-gray-400">AC</button>
          <button className="p-3 bg-gray-300 rounded-md hover:bg-gray-400">DEL</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">÷</button>
          <button onClick={() => handleButtonPress("7")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">7</button>
          <button onClick={() => handleButtonPress("8")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">8</button>
          <button onClick={() => handleButtonPress("9")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">9</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">×</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">4</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">5</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">6</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">-</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">1</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">2</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">3</button>
          <button onClick={() => handleButtonPress("+")} className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">+</button>
          <button onClick={() => handleButtonPress("")} className="col-span-2 p-3 bg-gray-200 rounded-md hover:bg-gray-300">0</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">.</button>
          <button onClick={() => handleButtonPress("")} className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;