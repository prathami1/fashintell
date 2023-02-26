import React, {useState} from 'react';

import Carousel from './Carousel'; 

function Card(props) {
    const [num, setNum] = useState(0)
    let messages = ["How is this vibe?", "Does this suit your style?", "Is this your kind of thing?", "Does this resonate with you?","Is this up your alley?","Does this jive with your tastes?","Is this in line with your preferences?","Does this match your personality?","Is this your cup of tea?","Does this fit your mood?","Is this your scene?"]
    return (
        <>          
            <div class="max-w-[400px] max-h-[1400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a>
                    {/* <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1532463788086-56a492a0b34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /> */}
                    <Carousel num={num}/>
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{messages[num]}</h5>
                    </a>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">React with the side buttons below</p> */}

                    <button type="button" onClick={() => setNum(num + 1)} class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 transition ease-in-out delay-50 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="20" height="20"
                            viewBox="0 0 50 50">
                            <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                        </svg>
                        <span class="sr-only">Like</span>
                    </button>

                    <button type="button" onClick={() => setNum(num + 1)} class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGQ9Ik0gMTMgMTQuNDg4MjgxIEwgOCAxMC44MjAzMTMgTCAzIDE0LjQ4ODI4MSBMIDMgMy41IEMgMyAyLjY3MTg3NSAzLjY3MTg3NSAyIDQuNSAyIEwgMTEuNSAyIEMgMTIuMzI4MTI1IDIgMTMgMi42NzE4NzUgMTMgMy41IFoiPjwvcGF0aD4KPC9zdmc+"/>
                        <span class="sr-only">Save</span>
                    </button>
                    
                    <button type="button" onClick={() => setNum(num + 1)} class="text-white bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" class="w-5 h-5"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Skip</span>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Card;