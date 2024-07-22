// import React from 'react'

import taskcs from "./task.module.css"
const Task = (props) => {

  return (
    <>
      <section className={taskcs.box_main}>
        <div className={taskcs.text}>{ props.value}</div>
        <div className={taskcs.button_main_block}>
          <button onClick={(e)=>props.deleteFun(e,props.id)}>Delete</button>
          <button  onClick={(e)=>props.updateFun(e,props.id)}>Update</button>
        </div>
      </section>
    </>
  )
}

export default Task