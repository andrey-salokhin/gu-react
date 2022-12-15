import {Message} from "./components/Message";
import {useEffect, useState} from "react";
import styles from "./App.css"

function App() {

    const [messageList, setMessage] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage([...messageList, {author: event.target.author.value, message: event.target.text.value}])
    }

    useEffect(() => {
        if(messageList.length) {
            const timer = setTimeout(() => {
                alert('Спасибо за ваше сообщение!')
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [handleSubmit])

    return(
      <>
        <Message message="This message is taken from props"/>

          {
              messageList.map((item, index) => (
                  <div key={index}>
                      <p>{item.author}</p>
                      <p>{item.message}</p>
                  </div>
              ))
          }

          <form onSubmit={handleSubmit}>
              <input className={styles.input} type="text" name="author" placeholder='Enter your name'/>
              <br/>
              <textarea className={styles.textarea} cols="30" rows="10" name='text'></textarea>
              <br/>
              <button type="submit">Submit</button>
          </form>
      </>
  )
}

export default App