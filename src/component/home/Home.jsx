import  { useState,useEffect } from 'react'
import hmcs from "./home.module.css" //HMCS MAY kuch v likh shakte
import Task from "../task/Task"    // 
const Home = () => {
    const [allData, setAllData] = useState([]);// this is for store the every box value with there id
    const [takeInput, setTakeInput] = useState(""); // this is taking the data from input box
    const [id, setid] = useState(0);





    const changes = (e) =>
    {
      
    //     const { value } = e.target;
    //     if(value[value.length-1]>'a' && value[value.length-1]<'z'  )
        //     setTakeInput(e.target.value);
    setTakeInput(e.target.value);
    }
    

    //  this is create function
    const add_the_data = () =>
    {
        

        setid(id+1)  // this is prev arrugument he know every thing about update
        setAllData((pres) =>
        {
            return [...pres, {data:takeInput,id:id}]; //...press mean jo v prev mean jo state ha
        })
            
        //     []
            
        // [
        //     { data: "xyz", id: 15 },
        //     { data: "", id:" " },
          
            
        // ]
    }

    const deletes = (d,data) =>
    {
    
        // "1"=>1
        //"0"=>0

        [{ data: "apple", id: "0" },
            {data:"banana",id:"1"}
        ]
        [{name:"apple",id:"0"}]
    // d= event
        // data mean id
        let demo = [];
        for (let i of allData)
        {
            console.log(i)
            if (Number(i.id) == Number(data)) {
                i.data = "";
               
            }
            demo.push(i);
           
        }

        console.log(demo)
        setAllData((pre)=>[...demo])
    }

    const update = (e,data) => {
        //    0 demo may
        let pro = prompt("please enter your value");
        let demo = allData;
        for (let i of demo)
        {
            if (Number(i.id) == Number(data))
            {
                i.data = pro;
            }
        }

        setAllData((pre)=>[...demo])


    }
    useEffect(() =>
    {

    }, [])
    console.log("hiuii")
  return (
    
      <div className={hmcs.home_main_container}>
          <main className={hmcs.box_main_container} >
          
            {/* this section is from heading tag */}
              <section className={hmcs.todolist_heading_main_block}>
                  <h1>TODO LIST</h1>
              </section>

            {/*  this is for line*/}
              <section className={hmcs.underLine_main_block}>
                  <span></span>
              </section>


              
              {/* this is for input box */}
              <div className={hmcs.input_and_button_main_box}>
              <section className={hmcs.input_main_box}>
              <input type="text" placeholder="add item..." onChange={changes} name="input" value={takeInput} />
                  </section>
                  <div className={hmcs.button_main_block}>
                  <button onClick={add_the_data}>ADD</button>
                  </div>
               
              </div>
            

              {/* this section is showing the box  */}


              <section className={hmcs.show_the_all_block}>
           
                  {allData.map((ele,ind) =>
                  {
                      return (
                        <Task key={ind} value={ele.data} id={ele.id} deleteFun={deletes} updateFun={update}  />
                      )
                      
                })}
           
                  </section>
        
           

          </main>
      </div>
  )
}

export default Home