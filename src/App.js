import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Post from './component/Post'

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [name,setName]=useState([])
  const [pageSize,setPageSize]=useState(4)
  const indexFirstPage=page*pageSize;
  const indexLastPage=indexFirstPage-pageSize
  const currentPage=data.slice(indexLastPage,indexFirstPage)
  useEffect(()=>{
      setLoading(true)
      axios.get(`https://reqres.in/api/users?page=${page}`)
      .then((res)=>{
        console.log(res.data)
        setData(res.data.data)
        console.log(res.data.last_name)
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[page])

  
  return (
    <div className="App">
      {data && data.map((item)=>(
          <Post data={item} loading={loading} />
      ))}
     
    </div>
  );
}

export default App;
