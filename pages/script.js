// import { useState } from "react";
// import Script from "next/script";

// const script = () => {
//     const [count, setCount] = useState(1);
//     setInterval(() => {
//       console.log(count);
//       document.getElementById("radio" + count).checked = true;
//       if (count === 3) {
//         setCount(1);
//       } else setCount(count + 1);
//     }, 4000);
// }

// export default script

// import { useState } from 'react'
// import Script from 'next/script'

// export default function Home() {
//   const [stripe, setStripe] = useState(null)

//   return (
//     <>
//       <Script
//         id="stripe-js"
//         src="https://js.stripe.com/v3/"
//         onLoad={() => {
//           setStripe({ stripe: window.Stripe('pk_test_12345') })
//         }}
//       />
//     </>
//   )
// }