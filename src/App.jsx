import {useState, useEffect} from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import {formatearDinero, calcularTotalPagar} from './helpers'

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoTotalPagar)

    //calcular el pago mensual
    setPago(total / meses)
  }, [cantidad, meses, total])

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChange(e){
    setCantidad(+e.target.value)
  }

  function handleClickDecremento(){
    const valor = cantidad - STEP

    if(valor < MIN){
      alert('invalid quantity')
      return
    }

    setCantidad(valor)
  }

  function handleClickIncremento(){
    const valor = cantidad + STEP

    if(valor > MAX){
      alert('invalid quantity')
      return
    }

    setCantidad(valor)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header/>

        <div className="flex justify-between my-6">
          <Button
            operador="-"
            fn = {handleClickDecremento}
          />

          <Button
            operador="+"
            fn = {handleClickIncremento}
          />
        </div>

        <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-limr-600"
        onChange={handleChange}
        min= {MIN}
        max= {MAX}
        step = {STEP}
        value={cantidad}
        />

        <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
          {formatearDinero(cantidad)}
        </p>

        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Choose a <soan className="text-indigo-600">deadline </soan> to pay
        </h2>

        <select
          className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl 
          text-gray-500 font-bold"
          value={meses}
          onChange={e => setMeses(+e.target.value)}
        >
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
        </select>

        <div className="my-5 space-y-3 bg-gray-50 p-5">
          <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Payment <soan className="text-indigo-600">summary </soan> 
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">{meses} Months</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total to pay</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pago)} Monthly payments</p>
        </div>


    </div>
  )
}

export default App
