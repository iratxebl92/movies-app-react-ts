import { useState } from "react"


export const useVideo = () => {
    const [prevDisabled, setPrevDisabled] = useState(false)
    const [nextDisabled, setNextDisabled] = useState(false)


    

  return {
    prevDisabled,
    setPrevDisabled,
    nextDisabled,
    setNextDisabled
  }
}
