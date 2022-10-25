import React, { useState, useEffect } from 'react'

export const Transacciones = () => {
    
    const url = 'http://localhost:9090/transacciones/consultarTodas'
    const [Transacciones, setTransacciones] = useState();
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      console.log(responseJSON)
      setTransacciones(responseJSON)
    }

    useEffect(() => {
      fetchApi()
    }, [])
  return (
    <div className="App w3-container" >
        <h1>Sistema de Transacciones</h1>
  
        <table className="w3-table-all w3-card-4">
          <thead>
            <tr className="w3-black">
              <td><strong>Numero de referencia</strong></td>
              <td><strong>Pan</strong></td>
              <td><strong>Total de la Compra</strong></td>
              <td><strong>Direccion de la Compra</strong></td>
              <td><strong>Estado</strong></td>
              <td><strong>Fecha</strong></td>
            </tr>
          </thead>
  
          <tbody>
            {!Transacciones ? 'cargando' :
              Transacciones.map((transaccion, index) => {
                return <tr className="w3-hover-blue" key={index}>
                  <td>{transaccion.numeroreferencia}</td>
                  <td>{transaccion.pan}</td>
                  <td>{transaccion.totalcompra}</td>
                  <td>{transaccion.direccioncompra}</td>
                  <td>{transaccion.estadotransacion}</td>
                  <td>{transaccion.horaFechatransaccion}</td>
                  </tr>
              })}
          </tbody>
        </table>
      </div>
  )
}
