import { GlobalContext } from "./contexts/GlobalContext";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card"

function App() {

  const [users, setUsers] = useState([])

  const getAllUsers = () => {
    return axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers: {
          Authorization: "renan-miranda-ammal"
        }
      })
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }  

  useEffect(() => {
    getAllUsers()
  }, [])
 
  return (
    <GlobalContext.Provider value={{}}>
      {users.map((user) => {
        return <Card key={user.id} name={user.name} id={user.id}/>
      })}
    </GlobalContext.Provider>
    
  )
}

export default App;
