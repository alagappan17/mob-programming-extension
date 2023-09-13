import { useContext } from 'react'
import { MobContext } from './MobContext';

const Settings = () => {

    const { minutesCycle, setMinutesCycle, 
            secondsCycle, setSecondsCycle, 
            minutesBreak, setMinutesBreak, 
            secondsBreak, setSecondsBreak, 
            soundOption, setSoundOption, 
        } = useContext(MobContext)!

    const handleMinutesCycleChange = (event: any) => {
        const value = event.target.value !== '' ? parseInt(event.target.value) : 0
        setMinutesCycle(value);
    };

    const handleSecondsCycleChange = (event: any) => {
        const value = event.target.value !== '' ? parseInt(event.target.value) : 0
        setSecondsCycle(value);
    };

    const handleMinutesBreakChange = (event: any) => {
        const value = event.target.value !== '' ? parseInt(event.target.value) : 0
        setMinutesBreak(value);
    };

    const handleSecondsBreakChange = (event: any) => {
        const value = event.target.value !== '' ? parseInt(event.target.value) : 0
        setSecondsBreak(value);
    };

    const handleOptionChange = (event: any) => {
        setSoundOption(event.target.value)
    };

  return (
    <div>
        <h1>Settings</h1>
        <h2>Time Per Cycle</h2>
        <label>Minutes: <input type="number" value={minutesCycle} onChange={handleMinutesCycleChange} required/></label><br />
        <label>Seconds: <input type="number" value={secondsCycle} onChange={handleSecondsCycleChange} required/></label><br />
        <h2>Time between Cycle</h2>
        <label>Minutes: <input type="number" value={minutesBreak} onChange={handleMinutesBreakChange} required/></label><br />
        <label>Seconds: <input type="number" value={secondsBreak} onChange={handleSecondsBreakChange} required/></label><br />
        <label>Sound:
          <select value={soundOption} onChange={handleOptionChange}>
            <option value="buzzer">Buzzer</option>
            <option value="ulhas">Ulhas</option>
          </select>
        </label><br />
    </div>
  )
}

export default Settings