import { useState } from "react"
import Form from "./components/Form"
import Respuesta from "./components/Respuesta"

const App = () => {

    const [array, setArray] = useState([
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ])

    return (
        <div className="bg-slate-600 h-96 flex">
            <div className="grid grid-cols-2 grid-rows-1 divide-x h-[32rem] w-10/12 mx-auto bg-white my-32 shadow-2xl rounded-md">
                <Form array={array} setArray={setArray} />
                <Respuesta array={array} />
            </div>
        </div>
    )
}

export default App