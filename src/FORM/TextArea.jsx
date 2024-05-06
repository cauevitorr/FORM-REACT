import React from "react"

const TextArea = () => {
  const [message, setMessage] = React.useState('')
 return(
  <form>
   <textarea
   value={message} 
   id="" 
   rows="5"
   onChange={({target}) => setMessage(target.value)}
   />
   <p>{message}</p>
  </form>
 )
}

export default TextArea
