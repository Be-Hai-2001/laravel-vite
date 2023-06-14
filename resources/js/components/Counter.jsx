import {useState} from "react";

function ExampleCounter_1(){
    const [count, setCount] = useState(0);

    return(
        <div className="font">
            <div>Tăng giá trị khi click : {count}</div>
            <button onClick={()=> setCount( count + 1)}>Increment Count!</button>
        </div>
    )
}
// export default ExampleCounter_1

// Initial satte với callback
function ExampleCounter_2(){
    const[infor,setInfor] = useState({
        name: 'Nguyễn Minh Hải',
        age : 22,
        address: 'T.Đồng Tháp',
        Job: 'Chưa có',
    });

    const handelUpdate = (newJjob) =>{
        setInfor({
            ...infor,
            Job:newJjob
        });
    }
    return(
        <>

            <h2>Tên: {infor.name}</h2>
            <h2>Tuổi: {infor.age}</h2>
            <h2>Quê quán: {infor.address}</h2>
            <h2>Công việc: {infor.Job}</h2>

            <input type="text" onChange={(e)=>{handelUpdate(e.target.value)}}/>

        </>
    )
}

// Mouse & Unmouse
function Mouse(){
    const [show, setShow] = useState(true);
    const [content, setContent] = useState({ hidden: 'hidden'});

    return(
        <div>
            {show && <ExampleCounter_1/>} <hr />
            {show && <ExampleCounter_2/>} <hr />

            <p><button onClick={ () => {
                if(show == true){
                   setContent({
                    hidden:'show'
                   })
                    // console.log(show);
                }else{
                    setContent({
                        hidden:'hidden'
                    })
                }
                return [setShow(!show), setContent];
            } } >{content.hidden}</button></p>
        </div>
    )
}
export  {ExampleCounter_2 ,ExampleCounter_1, Mouse}


