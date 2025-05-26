

import { Slider } from "radix-ui";
import { useState } from "react";   
export const RuntimesRange = () => {
    const [values, setValues] = useState([0, 300]);
  
  return (
<>
<div className="flex justify-between mb-4"> 
	<p>User Rating</p>
	<p>{values[0]} - {values[1]}</p>
</div>
    <form>
		<Slider.Root
			className="relative flex h-5 w-full touch-none select-none items-center"
			defaultValue={values}
            min={0}
			max={300}
			step={10}
            onValueChange={(value) => setValues(value)}
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
