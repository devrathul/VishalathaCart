const ViewCart = () => {
    return (
        <>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
                <section class="lg:col-span-2 border border-blue-100 rounded-xl overflow-hidden bg-white">
                    <div class="flex items-center justify-between gap-3 p-4 border-b border-blue-100">
                        <label class="flex items-center gap-3 text-sm font-medium">
                            <input id="select-all" type="checkbox" checked
                                class="w-4 h-4 accent-blue-600" />
                            Select All (<span id="selected-count">4</span>)
                        </label>
                        <button id="remove-selected"
                            class="text-xs font-semibold text-blue-700 hover:text-red-500">
                            ♜ Remove Selected
                        </button>
                    </div>
                    <div id="cart-items" class="px-4">
                        <article class="cart-item grid grid-cols-2 sm:grid-cols-[24px_100px_minmax(0,1fr)_96px] gap-3 sm:gap-4 items-center py-5 border-b border-blue-100"
                            data-price="999" data-id="1">
                            <input type="checkbox" checked class="item-check w-4 h-4 accent-blue-600" />
                            <img src="https://placehold.co/180x180/f7f9fc/173d68?text=iPhone+15+Pro"
                                alt="iPhone 15 Pro"
                                class="w-24 h-24 object-cover rounded-lg bg-gray-50" />
                            <div class="min-w-0">
                                <p class="text-xs text-gray-400">Mobiles</p>
                                <h3 class="text-sm font-medium mt-1">iPhone 15 Pro</h3>

                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="text-lg font-bold">$999.00</span>
                                    <span class="text-xs text-gray-400 line-through">$1,299.00</span>
                                    <span class="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">23% OFF</span>
                                </div>
                                <span class="inline-block mt-2 text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                                    ● In Stock
                                </span>
                            </div>
                            <div class="col-span-2 sm:col-span-1 flex sm:flex-col items-center justify-between gap-3">
                                <div class="flex items-center border border-blue-200 rounded-lg overflow-hidden">
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="minus" aria-label="Decrease quantity">−</button>
                                    <span class="quantity w-8 text-center text-sm">1</span>
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="plus" aria-label="Increase quantity">+</button>
                                </div>

                                <span class="line-total font-bold">$999.00</span>

                                <button class="remove-item text-xs text-gray-500 hover:text-red-500">♜ Remove</button>
                            </div>
                        </article>

                        <article class="cart-item grid grid-cols-2 sm:grid-cols-[24px_100px_minmax(0,1fr)_96px] gap-3 sm:gap-4 items-center py-5 border-b border-blue-100"
                            data-price="349" data-id="2">

                            <input type="checkbox" checked class="item-check w-4 h-4 accent-blue-600" />

                            <img src="https://placehold.co/180x180/f7f9fc/173d68?text=Sony+Headphones"
                                alt="Sony WH-1000XM5 headphones"
                                class="w-24 h-24 object-cover rounded-lg bg-gray-50" />

                            <div class="min-w-0">
                                <p class="text-xs text-gray-400">Audio</p>
                                <h3 class="text-sm font-medium mt-1">Sony WH-1000XM5</h3>

                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="text-lg font-bold">$349.00</span>
                                    <span class="text-xs text-gray-400 line-through">$499.00</span>
                                    <span class="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">30% OFF</span>
                                </div>

                                <span class="inline-block mt-2 text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                                    ● In Stock
                                </span>
                            </div>

                            <div class="col-span-2 sm:col-span-1 flex sm:flex-col items-center justify-between gap-3">
                                <div class="flex items-center border border-blue-200 rounded-lg overflow-hidden">
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="minus" aria-label="Decrease quantity">−</button>
                                    <span class="quantity w-8 text-center text-sm">1</span>
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="plus" aria-label="Increase quantity">+</button>
                                </div>

                                <span class="line-total font-bold">$349.00</span>
                                <button class="remove-item text-xs text-gray-500 hover:text-red-500">♜ Remove</button>
                            </div>
                        </article>

                        <article class="cart-item grid grid-cols-2 sm:grid-cols-[24px_100px_minmax(0,1fr)_96px] gap-3 sm:gap-4 items-center py-5 border-b border-blue-100"
                            data-price="129" data-id="3">

                            <input type="checkbox" checked class="item-check w-4 h-4 accent-blue-600" />

                            <img src="https://placehold.co/180x180/f7f9fc/173d68?text=Nike+Air+Force"
                                alt="Nike Air Force 1 shoes"
                                class="w-24 h-24 object-cover rounded-lg bg-gray-50" />

                            <div class="min-w-0">
                                <p class="text-xs text-gray-400">Footwear</p>
                                <h3 class="text-sm font-medium mt-1">Nike Air Force 1</h3>

                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="text-lg font-bold">$129.00</span>
                                    <span class="text-xs text-gray-400 line-through">$169.00</span>
                                    <span class="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">24% OFF</span>
                                </div>

                                <span class="inline-block mt-2 text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                                    ● In Stock
                                </span>
                            </div>

                            <div class="col-span-2 sm:col-span-1 flex sm:flex-col items-center justify-between gap-3">
                                <div class="flex items-center border border-blue-200 rounded-lg overflow-hidden">
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="minus" aria-label="Decrease quantity">−</button>
                                    <span class="quantity w-8 text-center text-sm">1</span>
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="plus" aria-label="Increase quantity">+</button>
                                </div>

                                <span class="line-total font-bold">$129.00</span>
                                <button class="remove-item text-xs text-gray-500 hover:text-red-500">♜ Remove</button>
                            </div>
                        </article>

                        <article class="cart-item grid grid-cols-2 sm:grid-cols-[24px_100px_minmax(0,1fr)_96px] gap-3 sm:gap-4 items-center py-5"
                            data-price="199" data-id="4">

                            <input type="checkbox" checked class="item-check w-4 h-4 accent-blue-600" />

                            <img src="https://placehold.co/180x180/f7f9fc/173d68?text=Pink+Handbag"
                                alt="Michael Kors handbag"
                                class="w-24 h-24 object-cover rounded-lg bg-gray-50" />

                            <div class="min-w-0">
                                <p class="text-xs text-gray-400">Bags</p>
                                <h3 class="text-sm font-medium mt-1">Michael Kors Handbag</h3>

                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span class="text-lg font-bold">$199.00</span>
                                    <span class="text-xs text-gray-400 line-through">$249.00</span>
                                    <span class="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">20% OFF</span>
                                </div>

                                <span class="inline-block mt-2 text-xs text-green-700 bg-green-50 rounded-full px-2 py-1">
                                    ● In Stock
                                </span>
                            </div>

                            <div class="col-span-2 sm:col-span-1 flex sm:flex-col items-center justify-between gap-3">
                                <div class="flex items-center border border-blue-200 rounded-lg overflow-hidden">
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="minus" aria-label="Decrease quantity">−</button>
                                    <span class="quantity w-8 text-center text-sm">1</span>
                                    <button class="quantity-btn px-2.5 py-1.5 hover:bg-blue-50" data-action="plus" aria-label="Increase quantity">+</button>
                                </div>

                                <span class="line-total font-bold">$199.00</span>
                                <button class="remove-item text-xs text-gray-500 hover:text-red-500">♜ Remove</button>
                            </div>
                        </article>

                    </div>

                    <div id="empty-cart" class="hidden text-center py-14 px-4">
                        <div class="text-5xl mb-4">🛒</div>
                        <h3 class="text-xl font-bold">Your cart is empty</h3>
                        <p class="text-sm text-gray-500 mt-2">Add products to start shopping.</p>
                        <a href="shop.html" class="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg">Continue Shopping</a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ViewCart