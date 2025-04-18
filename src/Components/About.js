// import React, { useState } from 'react'

// export default function About(props) {
// //   const[myStyle,setMyStyle]=useState({
// //       color:'black',
// //       backgroundColor:'white',
      
// //     })
// // const[btnText,setBtnText]=useState("Enable dark mode")
// // const toggleStyle=()=>{
// //   if(myStyle.color==='white'){
// //     setMyStyle({
// //         color:'black',
// //         backgroundColor:'white'
// //       })
// //       setBtnText("Enable dark mode")
// //   }else{
// //     setMyStyle({
// //       color:'white',
// //       backgroundColor:'black',
// //       border:'1.4px solid white'
// //   })
// //   setBtnText("Enable light mode")
// //   }
// //  }
//  let myStyle={
//   color:props.mode==='dark'?'white':'#042743',
//   backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',

// }

//   return (
//     <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}> {/*myStyle will be an object*/}
//       <h1 className='my-3'>About us</h1>
//         <div className="accordion" id="accordionExample">
//           <div className="accordion-item" style={myStyle}>
//             <h2 className="accordion-header" >
//               <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                 <strong>Analyze Your Text</strong>
//               </button>
//             </h2>
//           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
//               <div className="accordion-body" style={myStyle}>
//                 TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
//               </div>
//             </div>
//         </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                <strong> Free to use</strong>
//               </button>
//             </h2>
//           <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
//               <div className="accordion-body" style={myStyle}>
//                 TextUtils is a free character counter toll that provides instant charcter count & word count statistics for given text. TextUtils reports the number of words and characters. Thus it is suitable for writting text with word/ character limit.
//               </div>
//           </div>
//         </div>
//           <div className="accordion-item">
//             <h2 className="accordion-header">
//               <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                <strong> Browser Compatible </strong>
//               </button>
//             </h2>
//            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
//               <div className="accordion-body" style={myStyle}>
//                 This word counter software works in my web browers in any browsers such as chromw, Firefox, Internet Explorer, Safari, Opera, It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
//               </div>
//            </div>
//           </div>
//         </div>    
//     </div>
//   )
// }
// import React from 'react'

// export default function About(props) {
//   let myStyle = {
//     color: props.mode === 'dark' ? 'white' : '#042743',
//     backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
//   }

//   return (
//     <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
//       <h1 className='my-3'>About us</h1>
//       <div className="accordion" id="accordionExample">

//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               <strong>Analyze Your Text</strong>
//             </button>
//           </h2>
//           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
//             <div className="accordion-body" style={myStyle}>
//               TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               <strong> Free to use</strong>
//             </button>
//           </h2>
//           <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
//             <div className="accordion-body" style={myStyle}>
//               TextUtils is a free character counter tool that provides instant character count & word count statistics for given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
//             </div>
//           </div>
//         </div>

//         <div className="accordion-item" style={myStyle}>
//           <h2 className="accordion-header">
//             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               <strong> Browser Compatible </strong>
//             </button>
//           </h2>
//           <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
//             <div className="accordion-body" style={myStyle}>
//               This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits counting characters in Facebook posts, blogs, books, Excel documents, PDF documents, essays, etc.
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }
import React from 'react';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  };

  return (
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h1 className='my-3'>About us</h1>
      <div className="accordion" id="accordionExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong>Analyze Your Text</strong>
                <span style={{ marginLeft: 'auto' }}></span>
              </div>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong>Free to use</strong>
                <span style={{ marginLeft: 'auto' }}></span>
              </div>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character & word count statistics for the given text.
              TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong>Browser Compatible</strong>
                <span style={{ marginLeft: 'auto' }}></span>
              </div>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in all web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.
              It suits counting characters in Facebook posts, blogs, books, Excel documents, PDF documents, essays, etc.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
