 "use client"

import { useState } from "react";


// const InteractivePage = () => {
//     const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1 className="font-bold text-2xl">Welcome to Interactive Page</h1>
//         <p className="my-4">This route features a count button that demonstrates the power of client-side interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the "use client" directive in Next.js, which allows this component to be rendered on the client-side.</p>
//         <button className="border-black border-2 px-4 py-2 rounded-xl" onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//     </div>
//   )
// }

// export default InteractivePage
export default function Interactive() {
    const[count,setcount]=useState(0);
    return (
      <div className="flex justify-center h-screen">
        <div >
          <div className="font-bold text-2xl text-center">Welcome to Interactive Page</div>
          <div className="my-4 text-xl text-center">
            <p >This route features a count button that demonstrates the power of client-side interactivity in Next.js. Click the button and see the count go up! This interactive feature is powered by the "use client" directive in Next.js, which allows this component to be rendered on the client-side</p>
            <button className="border-2 border-gray-400 rounded mt-2" onClick={()=>(setcount(count+1))}>
                  Count is {count}
               </button>
          </div>
        </div>
      </div>    
    );
  }