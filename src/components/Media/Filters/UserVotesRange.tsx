import { useState } from "react";
import { Slider } from "radix-ui";

export const UserVotesRange = () => {
    const [values, setValues] = useState<number>(0);

  return (
<>
<div className="flex justify-between mb-4"> 
	<p>Minimum User Votes </p>
	<p> Min: {values}</p>
</div>
    <form>
    <Slider.Root
			className="relative flex h-5 w-full touch-none select-none items-center"
			defaultValue={[values]}
			max={1000}
			step={50}
            onValueChange={(value) => setValues(value[0] ?? 0)}
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
