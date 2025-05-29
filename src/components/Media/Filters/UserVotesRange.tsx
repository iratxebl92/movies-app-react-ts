import { useState } from "react";
import { Slider } from "radix-ui";
import { useMoviesStore } from "../../../config/store/store";

export const UserVotesRange = () => {
    const [minVoteCount, setMinVoteCount] = useState(0)
	const {setFilterParams, filterParams} = useMoviesStore()

	const handleUserVotes = (votes: number) => {
	
		setMinVoteCount(votes)
		setFilterParams({vote_count_min: votes})
	}
  return (
<>
<div className="flex justify-between mb-4"> 
	<p>Minimum User Votes </p>
	<p> Min: {minVoteCount}</p>
</div>
    <form>
    <Slider.Root
			className="relative flex h-5 w-full touch-none select-none items-center"
			defaultValue={[minVoteCount]}
			max={1000}
			step={50}
            onValueChange={(value) => handleUserVotes(value[0] ?? 0)}
			minStepsBetweenThumbs={50}
            >
			<Slider.Track className="relative h-[3px] grow rounded-full bg-black">
				<Slider.Range className="absolute h-full rounded-full bg-white" />
			</Slider.Track>
			<Slider.Thumb
				className="block size-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_5px] focus:shadow-blackA5 focus:outline-none"
				aria-label="Volume"
			/>
		</Slider.Root>
	</form>
	</>
  )
}
