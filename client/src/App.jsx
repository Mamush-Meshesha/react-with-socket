import io from "socket.io-client"
function App() {
 const socket = io.connect("/")
  return (
    <>
      <div>
        <h1>this is client side app</h1>
        </div>
    </>
  )
}

export default App
