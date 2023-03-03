export default function Header(){
    return(
       
         <div id="logo" className="w-full h-auto bg-black flex max-sm:block">
            <div>
               <p className="text-2xl text-white p-5 font-bold ml-3 ">Local Sell</p>
            </div>
           <div className="p-5 ml-14 max-sm:ml-3" >
           <ul className="flex gap-5 text-white  max-sm:block">
            <select className="text-black rounded p-2 max-sm:mb-5 ">
                <option>Category</option>
                <option><a href="#">Potery</a></option>
                <option><a href="#">Wood carves</a></option>
            </select>
            <li className="p-2 hover:underline"><a href="#">About</a></li>
            <li className="p-2 hover:underline"><a href="#">Login</a></li>
           </ul>
           </div>
           
         </div>
    );
}