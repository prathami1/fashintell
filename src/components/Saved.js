import React from 'react';
import gucci from '../img/Gucci.jpg'
import dior from '../img/jean.jpg'
import joggers from '../img/joggers.jpg'
import Disclosure from './Disclosure'

function Saved(props) {
    return (
        <div className='fixed top-0 right-0 w-72 h-full bg-gray-50 text-black overflow-scroll'>
            <h1 className='font-semibold mt-3'>Popular Styles</h1>

            <div class="w-5/6 mx-auto bg-white border-blue-600 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 border-4">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src={gucci} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5 pt-10">Gucci Full-Zip Sweater Italian</h5>
                    </a>
                    <div class="flex items-center justify-between pt-3">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$100</span>
                        <a href="#" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-3 py-2.5 text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>

            <div class="w-5/6 mx-auto my-4 bg-white border-blue-600 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 border-4">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src={joggers} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5 pt-10">Unisex Charcoal Jogger</h5>
                    </a>
                    <div class="flex items-center justify-between pt-3">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$19</span>
                        <a href="#" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-3 py-2.5 text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Saved;