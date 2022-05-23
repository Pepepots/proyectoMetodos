import React from 'react'

const Form = ({ array, setArray }) => {
    
    const arr = array
    const inputValue = (x, y, value) => {
        arr[x][y] = value
        setArray(arr)
    }
    
    return (
        <>
            <div
                className="bg-gray-300 grid grid-cols-6 grid-rows-5"
            >

                <div className="col-start-2 row-start-2 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(0, 0, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">X</label>
                </div>

                <div className="col-start-3 row-start-2 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(0, 1, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Y</label>
                </div>

                <div className="col-start-4 row-start-2 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(0, 2, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Z</label>
                </div>

                <div className="col-start-5 row-start-2 grid grid-cols-4 grid-rows-4">
                    <label htmlFor="dato" className="col-start-1 row-start-3 text-xl m-auto -my-3">=</label>
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(0, 3, Number(e.target.value))}
                    />
                </div>
                {/* primer ecuacion */}
                <div className="col-start-2 row-start-3 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(1, 0, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">X</label>
                </div>

                <div className="col-start-3 row-start-3 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(1, 1, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Y</label>
                </div>

                <div className="col-start-4 row-start-3 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(1, 2, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Z</label>
                </div>

                <div className="col-start-5 row-start-3 grid grid-cols-4 grid-rows-4">
                    <label htmlFor="dato" className="col-start-1 row-start-3 text-xl m-auto -my-3">=</label>
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(1, 3, Number(e.target.value))}
                    />
                </div>
                {/* primer ecuacion */}
                <div className="col-start-2 row-start-4 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                        onChange={(e) => inputValue(2, 0, Number(e.target.value))}
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">X</label>
                </div>

                <div className="col-start-3 row-start-4 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        onChange={(e) => inputValue(2, 1, Number(e.target.value))}
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Y</label>
                </div>

                <div className="col-start-4 row-start-4 grid grid-cols-4 grid-rows-4">
                    <input
                        type="number"
                        onChange={(e) => inputValue(2, 2, Number(e.target.value))}
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                    />
                    <label htmlFor="dato" className="col-start-4 row-start-3 text-xl m-auto">Z</label>
                </div>

                <div className="col-start-5 row-start-4 grid grid-cols-4 grid-rows-4">
                    <label htmlFor="dato" className="col-start-1 row-start-3 text-xl m-auto -my-3">=</label>
                    <input
                        type="number"
                        onChange={(e) => inputValue(2, 3, Number(e.target.value))}
                        className="col-span-2 row-span-2 col-start-2 row-start-2 text-center"
                    />
                </div>
            </div>
        </>
    )
}

export default Form