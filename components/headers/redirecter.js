
export default function Redirecter() {
    return (
        <div class="mx-auto container py-20 md:py-48 text-center sm:px-4 px-6">
            <h1 class="text-2xl text-white font-extrabold leading-10
                    sm:text-3xl sm:leading-none md:text-4xl xl:text-5xl"
            >
                You are going to be redirected in:
            </h1>
            <h1 
                v-if="!redirectBlocked"
                class="text-6xl text-green-500 font-black"
            >
                { countDown / 10 }
            </h1>
            <h1 
                v-else
                class="text-6xl text-red-500 font-black"
            >
                Stopped
            </h1>
            <p class="max-w-lg mx-auto mt-3 text-sm text-center text-gray-700 
                    md:mt-6 sm:text-base md:max-w-xl md:text-lg xl:text-xl"
            >
                If you don't want to be redirected to this URL please click on the red stop button below to stay on this page.
            </p>

            {/* URL with stop redirect */}
            <div class="relative flex md:flex-row flex-col items-center max-w-2xl mx-auto mt-12 overflow-hidden text-center md:rounded-full md:h-16">
                <input 
                    type="text" 
                    name="url" 
                    placeholder="Place your url here" 
                    class="w-full h-12 px-4 md:px-6 py-2 font-medium text-gray-900 focus:outline-none rounded-full mb-2 md:mb-0 md:rounded-none md:h-16"
                    disabled
                    v-model="originalUrl"
                />
                <button 
                    type="button" 
                    class="bg-red-500 h-12 md:w-48 relative top-0 right-0 text-gray-900 text-base font-bold 
                            leading-6 hover:bg-red-600 transition duration-500 ease-in-out focus:outline-none
                            rounded-full md:rounded-none w-full md:h-16"
                    //onClick="stopRedirect"
                >
                    { redirectBlocked ? "Stopped" : "Stop Redirect" }
                </button>
            </div>

        </div>
    )
}