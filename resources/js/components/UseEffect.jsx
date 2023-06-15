import React, { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums'];

function Content(){
    const [posts, setPosts] = useState([]); // Mảng chứa API
    const [title, settitle] = useState(''); //Đối tượng API trong mảng
    const [type, setType] = useState('posts'); // Loại đối tượng thay đổi
    const [evenShow,setEvenShow] = useState(false);
    // Hiển thị lst api khi click
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts =>{
            setPosts(posts);
        });
    },[type]);

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY >= 200){
                setEvenShow(true);
            }else{
                setEvenShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        //Xóa sự kiện cũ khi rende lại trang
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return(
        <div>

            {
                tabs.map(tab=>(
                    <button
                        className="margin-btn-bw"
                        key={tab}
                        onClick={()=>setType(tab)}
                        style={type === tab ?{color:"white", background:'#333'
                        }:{} }
                    >
                        {tab}
                    </button>
                ))
            }

            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

            {
                evenShow && (<button style={{
                    position:"fixed",
                    right:20,
                    bottom:20,
                }}>Click</button>)
            }
        </div>
    )
}
export default Content
