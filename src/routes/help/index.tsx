import { component$, } from '@builder.io/qwik';

export default component$(() => {

    return (
        <div>
            <div class="min-h-[24rem] max-w-6xl m-auto rounded-lg p-4 space-y-4 ">
                <div class="flex flex-col justify-center items-center">
                    <div class="relative flex flex-col items-center rounded-[20px] md: w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-xl hover:shadow-2xl">
                        <div class="mt-0 flex flex-col items-center pb-4">
                            <h4 class="text-xl md:text-3xl font-bold">
                                Customer Support
                            </h4>
                        </div>
                        <div class="flex flex-col items-center justify-center text-center">
                            <div class="text-sm md:text-lg">
                                Phone:
                                <span class="font-bold px-2">+12 345 78 91 01</span>
                            </div>
                            <div class="text-sm md:text-lg">
                                Email:
                                <span class="font-bold px-2">support@montibread.be</span>
                            </div>
                            <p class="pt-4">We will awnser your request in up to 3 business days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
