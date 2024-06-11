import styled from "styled-components";

const PaginationWrapper=styled.div`
background-color:red;
margin-left:680px;
 button{
  color:white;
  width:30px;
  height:30px;
  font-size:18px;
  margin-left: 20px;
  margin-right:20px;
  background-color: #2b2074;
  border-color: #2b2074;
  border-width: 1px;
  cursor:pointer;
 }

 .unvalid{
  background-color: #352c72;
 }

font-size:18px;
`



const Pagination=({page,setPage})=>{
  const totalPage=500;

  const handleLeftButton=()=>{
    if(page>1){
      setPage(page-1);
    }
  };

  const handleRightButton=()=>{
    if(page<totalPage){
      setPage(page+1);
    }
  };

  return(
    <PaginationWrapper>
     <button className={page===1?'unvalid':'valid'} onClick={handleLeftButton} disabled={page===1}>{'<'}</button>
     <div>{page}</div>
     <button className={page===totalPage?'unvalid':'valid'}
      onClick={handleRightButton} disabled={page===totalPage}>{'>'}</button>
    </PaginationWrapper>
  )
}

export default Pagination;