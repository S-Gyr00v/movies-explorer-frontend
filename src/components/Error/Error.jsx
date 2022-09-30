import './Error.css';

function Error({ text, type }) {
  if (type) {
    return (
      <p className={`error-${type}`}>{text}</p>
    )
  }
  else {
    return (
      <p className='error'>{text}</p>
    )
  }
}



//   if (type) return (
//     <p className='error'>{text}</p>
//   );
// }
// else 





//   return (
//     <p className='error'>{text}</p>
//   );
// }

export default Error;
