import React,{useState} from 'react'
import "./App.css"
import { FcCollapse, FcExpand} from "react-icons/fc";

const Data = ({title,body}) => {

    const[show,setShow] = useState(false);

    const handleClick = ()=>{
        setShow(!show);
    }

  return (
    <div className={show?'opened accordion-item':'accordion-item'}>
      <div className="accordion-title" onClick={handleClick}>
        <h5>{title}</h5>
        <p>{show ? <FcCollapse size={20}/> : <FcExpand size={20}/>}</p>
      </div>

      {show && <p>{body}</p>}
    </div>
  )
}

export default Data
