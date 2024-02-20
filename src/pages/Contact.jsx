import { useState } from 'react'


function Contact() {
  const [data, setData] = useState({
    name: " ",
    email: " ",
    message: " "
  })
  const [error, setError] = useState("")

  function handleSubmit(event) {
    const { name, value } = event.target
    if (!value) {
      setError(`${name} is required`)
    } else if (name == "message" && !data.email.includes("@")) {
      setError("Invalid Email")
    } else if (name != "name" && !data.name) {
      setError("Name is required")
    } else if (name != "message" && !data.message) {
      setError("Message is required")
    } else {
      setError(" ")
    }

    setData({ ...data, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault()
  }
  return (
    <div id='contact'>
      <form onSubmit={submit}>
        <label htmlFor="">Name:</label>
        <input type="text" name='name' onChange={handleSubmit} />
        <label htmlFor="">Email Address:</label>
        <input type="email" name='email' onChange={handleSubmit} />
        <label htmlFor="">Message:</label>
        <textarea name="message" id="" cols="30" rows="10" onChange={handleSubmit}></textarea>
      {
        error && (
          <p>{error}</p>
        )
      }
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact