
import React,{useState} from 'react'
import "./NavBar.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom";
function NavBar() {
    // define state for toggle meniu 
    const[status,setStatus]=useState({
        activeStatus:null,
        objects:[{id:1,name:"ALL",link:"/All"},{id:2,name:"CLOTHES",link:"/Clothes"},{id:3,name:"TECH",link:"Tech"}]
        
    });
   function toggleActive(index){
    setStatus({...status,activeStatus:status.objects[index]});
    
   }
   function toggleActiveStyles(index){
       if(status.objects[index] === status.activeStatus){
           return "active";
           
       }else{
           return "navbar__leftComponent"
       }
       
   }
  
  return (
    <div className='navbar__container'>
            <div className='navbar'>
        <div className='navbar__left'> 
            { 
                status.objects.map((elements,index,name)=>(
                    <Link key={index} to={status.objects[index].link} className='Link'>
                <div key={index} className={toggleActiveStyles(index)} 
                    onClick={()=>{toggleActive(index)}}> 
                    {status.objects[index].name}
                    
                    </div></Link>
                ))
            }
        
        </div>
        <div >
           <Link to="/" className='navbar__logo'> 

           <ShoppingBagIcon/></Link>
        </div>
        <div className='navbar__right'> 
        
        <div className='navbar__rightComponent'> 
            <AttachMoneyIcon className='currency'/>
            <KeyboardArrowDownIcon id="down"/>
        </div>
        <div className='navbar__rightComponent'> 
            <ShoppingCartOutlinedIcon/>
        </div>
        
        
        </div>
        <div className='navbar__right'>   </div>

    </div>
    </div>
  )
}

export default NavBar