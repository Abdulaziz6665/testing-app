import { useEffect, useState } from "react"

function Comp({ dataa }) {

  const [data, setData] = useState()

  useEffect(() => {

    ;(async () => {

      const res = await fetch('http://localhost:5000/sub', {
        method: 'post',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          user: dataa.user,
          id: dataa.id,
        })
      })

      const json = await res.json()

      setData(json)

    })()

  }, [dataa.user, dataa.id])


  return (
    <>
      <h1>Clinica</h1>

      <div>
        {data && data.map((elem, i) => (
          <div key={i}>
            <h2>{elem.clinica_name}</h2>
            <p>{elem.clinica_message_text}</p>
            <p>{elem.clinica_message_cost}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default Comp