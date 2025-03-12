
export const OptionsTab = () => {

  const options = ["Backdrops", "Posters", "Videos", "Reviews"];
  const handleSubmit = (option, index) => {
    console.log(option)
    console.log(index)
  }
  return (
    <div className="flex justify-center border-4 rounded-lg border-black max-w-max m-auto">
        {
            options.map((option:any, index) => 
              <button 
                key={index} 
                className=" font-medium text-2xl px-4 py-2 text-center transition-colors duration-300 text-gray-600 hover:text-white hover:bg-black"
                onClick={() => handleSubmit(option, index)}  
              >
                    {option} 
              </button>
            )
        }
    </div>
  );
};
