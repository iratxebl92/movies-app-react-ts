

import { Slider } from "radix-ui";
import { useEffect, useState } from "react";   
import { useMoviesStore } from "../../../config/store/store";
export const RuntimesRange = () => {
	const [minRuntime, setMinRuntime] = useState(0)
	const [maxRuntime, setMaxRuntime] = useState(300)
	const {setFilterParams} = useMoviesStore()


  const handleRunTimes = (minutes: number[]) => {

	setMinRuntime(minutes[0] || 0)
	setMaxRuntime(minutes[1] || 300)
  }
  useEffect(() => {
	setFilterParams({runtime_min: minRuntime, runtime_max: maxRuntime})
  }, [minRuntime, maxRuntime])
  return (
<>
<div className="flex justify-between mb-4"> 
	<p>Runtimes (minutes)</p>
	<p>{minRuntime} - {maxRuntime}</p>
</div>
    <form>
		<Slider.Root
			className="relative flex h-5 w-full touch-none select-none items-center"
			defaultValue={[minRuntime, maxRuntime]}
            min={0}
			max={300}
			step={10}
            onValueChange={(value) => handleRunTimes(value)}
            minStepsBetweenThumbs={10}
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
