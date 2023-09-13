import { useContext } from 'react'
import UserBox from './UserBox'
import { MobContext } from './MobContext';

const Users = () => {
  const { userCount, setUserCount } = useContext(MobContext)!
  
  const addNewUser = (): void => {
    let users = userCount + 1
    setUserCount(users)
  }

  return (
    <div>
      {Array.from({length: userCount}, (_, index) => (
        <div key={index}>
          <UserBox index = {index}/>
        </div>
      ))}
      <button  type='button' onClick={() => {addNewUser()}}>Add New</button>
    </div>
  )
}

export default Users