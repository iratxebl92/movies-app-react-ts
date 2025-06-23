import { useState, useEffect } from "react"
import { useMoviesStore } from "../../../../config/store/store"


export const useModalVideo = (selectedVideoKey: string) => {
  const { 
    openVideoModal, 
    setOpenVideoModal, 
    setCurrentVideoIndex, 
    currentVideoIndex, 
    setSelectedVideoKey, 
    videos, 
    isWatchTrailerButton, 
    setIsWatchTrailerButton 
  } = useMoviesStore();

  const [prevDisabled, setPrevDisabled] = useState(false)
  const [nextDisabled, setNextDisabled] = useState(false)

  useEffect(() => {
    if(!videos) return
    if(currentVideoIndex === 0){
      setPrevDisabled(true)
    }else {
      setPrevDisabled(false)
    }
    if(currentVideoIndex === videos.length - 1){
      setNextDisabled(true)
    }else {
      setNextDisabled(false)
    }
  }, [currentVideoIndex, selectedVideoKey])

  const handlePrev = () => {
    if(currentVideoIndex !== 0){
      setCurrentVideoIndex(currentVideoIndex - 1)
      const previousVideo = videos[currentVideoIndex - 1]
      if (previousVideo) setSelectedVideoKey(previousVideo.key)
    } 
  };

  const handleNext = () => {
    if(currentVideoIndex < videos.length - 1){
      setCurrentVideoIndex(currentVideoIndex + 1)
      const nextVideo = videos[currentVideoIndex + 1]
      if (nextVideo) setSelectedVideoKey(nextVideo.key)
    }
  };

  const submitCloseButton = () => {
    setOpenVideoModal(false)
    setIsWatchTrailerButton(false)
  }

  return {
    openVideoModal,
    setOpenVideoModal,
    currentVideoIndex,
    videos,
    isWatchTrailerButton,
    prevDisabled,
    setPrevDisabled,
    nextDisabled,
    setNextDisabled,
    handlePrev,
    handleNext,
    submitCloseButton
  }
}
