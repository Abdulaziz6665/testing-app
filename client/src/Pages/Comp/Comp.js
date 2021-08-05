import { useEffect } from "react"

function Comp({ dataa }) {

  useEffect(() => {

    ;(async () => {

      const res = await fetch('', {
        method: 'post',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          user: dataa.user,
          id: dataa.id,
        })
      })

    })()

  }, [])

  return (
    <>
      <h1>Analize</h1>

    </>
  )
}

export default Comp