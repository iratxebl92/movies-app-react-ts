

import { Slider } from "radix-ui";
import { useEffect, useState } from "react";   
import { useMoviesStore } from "../../../config/store/store";
export const UserRange = () => {
	const [minVoteCount, setMinVoteCount] = useState(0)
	const [maxVoteCount, setMaxVoteCount] = useState(10)
	const {setFilterParams} = useMoviesStore()

	const handleUserRating = (votes: number[]) => {
		setMinVoteCount(votes[0] || 0)
		setMaxVoteCount(votes[1] || 10)
	}
  useEffect(() => {
	setFilterParams({vote_average_min: minVoteCount, vote_average_max: maxVoteCount})
  }, [minVoteCount, maxVoteCount])
  return (
<>
<div className="flex justify-between mb-4"> 
	<p>User Rating</p>
	<p>{minVoteCount} - {maxVoteCount}</p>
</div>
    <form>
		<Slider.Root
			className="relative flex h-5 w-full touch-none select-none items-center"
			defaultValue={[minVoteCount, maxVoteCount]}
            min={0}
			max={10}
			step={0.5}
            onValueChange={(value) => handleUserRating(value)}
            minStepsBetweenThumbs={0.5}
		>
			<Slider.Track className="relative h-[3px] grow rounded-full bg-black">
				<Slider.Range className="absolute h-full rounded-full bg-white" />
			</Slider.Track>
			<Slider.Thumb
				className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
				aria-label="Volume"
			/>
            <Slider.Thumb
				className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
				aria-label="Volume"
			/>
		</Slider.Root>
	</form>
	</>
  )
}
