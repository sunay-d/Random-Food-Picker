import {useState} from 'react'

export default function useToggle(defaultValue) {
    const [on, setOn] = useState(defaultValue)

    function toggle(){
        setOn(prev => !prev)
    }

    return [on, toggle]
}