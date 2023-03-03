import React from "react";

export default function HeroComponent(){
    return(
        <>
        <div class="flex gap-5 mb-5 justify-center align-center">
            <div className="mt-24 ml-14 max-sm:ml-5 max-sm:mt-14">
            <img src="https://media.istockphoto.com/id/450234711/photo/woven-bamboo-texture.jpg?s=612x612&w=0&k=20&c=tvbrmdG3Ehfo4Gzt0xk7JtXFb4fogVrZsYr9j3Jb1WY=" className="w-full h-full rounded shadow" />
            </div>
            <div className="mt-44 ms-5 max-sm:mt-24">
                <h1 class="text-5xl font-bold">Hand made bamboo works!</h1>
                <p class="py-6">Now a days bamboo works are more attractive which are used mostly for show casing in home.There is a huge demand for the hand made bamboo works where these handmade works are very difficult to find.<br/> So, this is a platform to find them</p>
            </div>
        </div>
        <div class="flex gap-5 mb-5">
            <div className="mt-40 ml-14 max-sm:mt-24 max-sm:ml-5">
                <h1 class="text-5xl font-bold">Pottery works!</h1>
                <p class="py-6">pottery, one of the oldest and most widespread of the decorative arts, consisting of objects made of clay and hardened with heat.The objects made are commonly useful ones, such as vessels for holding liquids or plates or bowls from which food can be served.</p>
            </div>
            <div className="mt-14 ml-4 w-2/6 mr-5 max-sm:mt-14 max-sm:ml-0 shrink-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjZx42lGXNmlozD016g2t5Bo4Bkm-BDbEfw&usqp=CAU" className="w-full h-full rounded shadow" />
            </div>
        </div>
        </>
        
    );
}