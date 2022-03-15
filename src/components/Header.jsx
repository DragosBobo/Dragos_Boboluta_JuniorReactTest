
import React,{useState} from 'react'
import "./header.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom";
function Header() {
    // define state for toggle meniu 
    const[status,setStatus]=useState({
        activeStatus:null,
        objects:[{id:1,name:"WOMEN",link:"/Women"},{id:2,name:"MEN",link:"/Men"},{id:3,name:"KIDS",link:"Kids"}]
        
    });
   function toggleActive(index){
    setStatus({...status,activeStatus:status.objects[index]});
    
   }
   function toggleActiveStyles(index){
       if(status.objects[index] === status.activeStatus){
           return "active";
           
       }else{
           return "header__leftComponent"
       }
       
   }
  
  return (
    <div className='header__container'>
            <div className='header'>
        <div className='header__left'> 
            { 
                status.objects.map((elements,index,name)=>(
                    <Link to={status.objects[index].link} className='Link'>
                <div key={index} className={toggleActiveStyles(index)} 
                    onClick={()=>{toggleActive(index)}}> 
                    {status.objects[index].name}
                    
                    </div></Link>
                ))
            }
        
        </div>
        <div className='header__logo'>
            <ShoppingBagIcon/>
        </div>
        <div className='header__right'> 
        
        <div className='header__rightComponent'> 
            <AttachMoneyIcon className='currency'/>
            <KeyboardArrowDownIcon id="down"/>
        </div>
        <div className='header__rightComponent'> 
            <ShoppingCartOutlinedIcon/>
        </div>
        
        
        </div>
        <div className='header__right'>   </div>

    </div>
    </div>
  )
}

export default Header