import { useState } from "react"
import { despejarVariable, gaussJordan } from "../helpers/metodos"


const Respuesta = ({ array }) => {

    const [resp, setResp] = useState(['', '', ''])
    // const [arrayAux, setArrayAux] = useState([])

    const setearRespuestaGaussJordan = () => {
        const arr = gaussJordan(array)
        const r1 = arr[0].length - 1
        const r2 = arr[1].length - 1
        const r3 = arr[2].length - 1

        const respuesta = [
            arr[0][r1],
            arr[1][r2],
            arr[2][r3]
        ]
        setResp(respuesta)
    }

    const setearRespuestaGaussSeidel = () => {

        const arrayAux = array.map((form) => form.map((value) => value))

        const form1 = despejarVariable(arrayAux[0], 0)
        const form2 = despejarVariable(arrayAux[1], 1)
        const form3 = despejarVariable(arrayAux[2], 2)

        let x = 0
        let y = 0
        let z = 0

        for (let i = 0; i < 100; i++) {
            x = form1(y, z)
            y = form2(x, z)
            z = form3(x, y)
        }

        setResp([x, y, z])
    }

    const setearRespuestaJacobi = () => {

        const arrayAux = array.map((form) => form.map((value) => value))

        const form1 = despejarVariable(arrayAux[0], 0)
        const form2 = despejarVariable(arrayAux[1], 1)
        const form3 = despejarVariable(arrayAux[2], 2)

        let x = 0
        let y = 0
        let z = 0

        for (let i = 0; i < 100; i++) {
            const xAux = form1(y, z)
            const yAux = form2(x, z)
            const zAux = form3(x, y)

            x = xAux
            y = yAux
            z = zAux

        }

        setResp([x, y, z])
    }

    return (
        <div className="grid grid-cols-5 grid-rows-6">
            <div
                className="col-start-2 row-start-2 w-full h-full col-span-3"
            >
                <p className="text-3xl w-11/12 m-auto my-6">
                    X = {resp[0] !== '' ? Number(resp[0]).toFixed(10) : ''}
                </p>
            </div>
            <button
                onClick={setearRespuestaGaussJordan}
                className='col-start-2 row-start-5 h-1/2 w-5/6 m-auto rounded-2xl text-sm bg-slate-600 text-white hover:bg-slate-700'
            >
                Gauss Jordan
            </button>

            <div
                className="col-start-2 row-start-3 w-full h-full col-span-3"
            >
                <p className="text-3xl w-11/12 m-auto my-6">
                    Y = {resp[1] !== '' ? Number(resp[1]).toFixed(10) : ''}
                </p>
            </div>
            <button
                onClick={setearRespuestaGaussSeidel}
                className='col-start-3 row-start-5 h-1/2 w-5/6 m-auto rounded-2xl text-sm bg-slate-600 text-white hover:bg-slate-700'
            >
                Gauss Seidel
            </button>

            <div
                className="col-start-2 row-start-4 w-full h-full col-span-3"
            >
                <p className="text-3xl w-11/12 m-auto my-6">
                    Z = {resp[2] !== '' ? Number(resp[2]).toFixed(10) : ''}
                </p>
            </div>
            <button
                onClick={setearRespuestaJacobi}
                className='col-start-4 row-start-5 h-1/2 w-5/6 m-auto rounded-2xl text-sm bg-slate-600 text-white hover:bg-slate-700'
            >
                Jacobi
            </button>
        </div>
    )
}

export default Respuesta