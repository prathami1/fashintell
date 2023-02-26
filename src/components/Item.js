import React from 'react';
import gucci from '../img/Gucci.jpg'
import dior from '../img/jean.jpg'
import joggers from '../img/joggers.jpg'

function Item() {
    return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="w-full max-w-sm bg-white border border-blue-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={gucci} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white pb-5 pt-10">Gucci Full-Zip Sweater Italian</h5>
        </a>
            <div class="flex items-center justify-between pt-3">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$100</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                    </a>
        </div>
</div>
</div>

<div class="w-full max-w-sm bg-white border border-blue-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4">
    <a href="#">
        <img class="p-8 rounded-t-lg object-fill h-1000" src={dior} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white pb-5">Men's Straight-Fit Jeans</h5>
        </a>
            <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$30</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                    </a>
        </div>
</div>
</div>

<div class="w-full max-w-sm bg-white border border-blue-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-4">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={joggers} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white pb-5">Unisex Charcoal Jogger</h5>
        </a>
            <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$19</span>
                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                    </a>
        </div>
</div>
</div>

</div>
   );
}

export default Item;
