// MobContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type MobContextType = {
  userCount: number
  setUserCount: React.Dispatch<React.SetStateAction<number>>
  usernames: string[]
  setUsernames: React.Dispatch<React.SetStateAction<string[]>>
  minutesCycle: number
  setMinutesCycle: React.Dispatch<React.SetStateAction<number>>
  secondsCycle: number
  setSecondsCycle: React.Dispatch<React.SetStateAction<number>>
  minutesBreak: number
  setMinutesBreak: React.Dispatch<React.SetStateAction<number>>
  secondsBreak: number
  setSecondsBreak: React.Dispatch<React.SetStateAction<number>>
  soundOption: string
  setSoundOption: React.Dispatch<React.SetStateAction<string>>
}

const MobContext = createContext<MobContextType | undefined>(undefined)

type MobProviderProps = {
  children: ReactNode
}

const UserProvider: React.FC<MobProviderProps> = ({ children }) => {
  const [userCount, setUserCount] = useState(1)
  const [usernames, setUsernames] = useState<string[]>([])
  const [minutesCycle, setMinutesCycle] = useState(0)
  const [secondsCycle, setSecondsCycle] = useState(0)
  const [minutesBreak, setMinutesBreak] = useState(0)
  const [secondsBreak, setSecondsBreak] = useState(0)
  const [soundOption, setSoundOption] = useState('buzzer')

  const contextValue: MobContextType = {
    userCount, setUserCount,
    usernames, setUsernames,
    minutesCycle, setMinutesCycle,
    secondsCycle, setSecondsCycle,
    minutesBreak, setMinutesBreak,
    secondsBreak, setSecondsBreak,
    soundOption, setSoundOption,
  }

  console.log(contextValue)

  return <MobContext.Provider value={contextValue}>{children}</MobContext.Provider>
}

export { MobContext, UserProvider }