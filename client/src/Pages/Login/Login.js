import { useEffect, useState } from 'react'
import { Link, Redirect } from "react-router-dom"

function Login() {

  const [submit, setSubmit] = useState(false)
  const [data, setData] = useState()

  const [user, setUser] = useState()
  const [pass, setPass] = useState()

  useEffect(() => {

    if (user && pass && submit) {
      ;(async () => {


          const res = await fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              user,
              pass
            })
          })

          const { message } = await res.json()

          setData(message)
        

        setSubmit(false)

      })()
    }
  }, [user, pass, submit])

  if (user && pass) {
    localStorage.setItem('data', JSON.stringify({user, pass}))
  }

  if (data === true) {
    return <Redirect to='/clinica'/>
  }

  return (
    <>
      <div>
        <h1>Login page</h1>
        <Link to='/'>
          <p>home</p>
        </Link>
      </div>
      {data && <>{data}</>}
      <form method='post' onSubmit={(e) => {
        e.preventDefault()
        setSubmit(true)
      }}>
        <input type="text" name='user' autoComplete='off' onKeyUp={(e) => setUser(e.target.value)} required/>
        <input type="text" name='pass' autoComplete='off' onKeyUp={(e) => setPass(e.target.value)} required/>
        <button>send</button>
      </form>
    </>
  )
}


export default Login