import React from 'react'
import Image from 'next/image'

const pageThree = () => {
  return(
    <div>
       <p>This is pageThree?</p>
       <p>hi</p>
       <h1>My Homepage</h1>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={75}
        height={75}
      />
      <p>Welcome to my homepage!</p>
    
    </div>
  )
}
export default pageThree

// import React from 'react'
// import Link from 'next/link'

// const pageThree =()=>{
//       return(
//             <div>
//                   <Link href="/">
//                   <a><h1> back </h1></a>
//                   </Link>
//                   <p>This is page three.</p>
//             </div>
//       )
// }

// export default pageThree