import {useContext} from 'react'
import { MobContext } from './MobContext'

const UserBox = (props: any) => {
  const { userCount, setUserCount, usernames, setUsernames } = useContext(MobContext)!

  const inputOnChange = (event: any, key: number) => {
    let newUsernames = [...usernames]
    newUsernames[key] = event.target.value
    setUsernames(newUsernames)
  }

  const deleteUser = (index: number) => {
    let usernamesArray = [...usernames]
    let users = userCount
    if (users > 1) {
      usernamesArray.splice(index, 1)
      setUsernames(usernamesArray)
      users--
      setUserCount(users) 
    }
  }

  const index = props.index
  console.log(props)
  return (
    <div className='userContainer' key={props.index}>
      <input type='text' value={usernames[index]} placeholder={`User ${index + 1}`} onChange={(event) => inputOnChange(event, index)}/><br />
      <button onClick={() => {deleteUser(index)}}>Delete</button>
    </div>
  )
}

export default UserBox