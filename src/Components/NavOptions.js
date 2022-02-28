import React,{useState,useEffect} from 'react'
import NavCard from './NavCard.js'
import '../Styles/NavOptions.css'

const NavOptions = ({miPhones,redmiPhones,tv,laptops,fitnessAndLifeStyle,home,audio,accessories}) => {
    const [miPhoneToggle, setMiPhoneToggle] =useState(false);
    const [ redmiMiPhoneToggle , setRedMiPhoneToggle] =useState(false);
    const [tvToggle, setTvToggle] =useState(false);
    const [laptopToggle, setLaptopToggle] =useState(false);
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] =useState(false);
    const [homeToggle, setHomeToggle] =useState(false);
    const [audioToggle, setAudioToggle] =useState(false);
    const [accessoriesToggle, setAccessoriesToggle] =useState(false);

    useEffect(()=>{
        if(window.location.pathname ==="/miphones"){
            return setMiPhoneToggle(true);
        }
        if(window.location.pathname ==="/redmiphones"){
            return setRedMiPhoneToggle(true);
        }
        if(window.location.pathname ==="/tv"){
            return setTvToggle(true);
        }
        if(window.location.pathname ==="/laptops"){
            return setLaptopToggle(true);
        }
        if(window.location.pathname ==="/lifestyle"){
            return setFitnessAndLifeStyleToggle(true);
        }
        if(window.location.pathname ==="/home"){
            return setHomeToggle(true);
        }
        if(window.location.pathname ==="/audio"){
            return setAudioToggle(true);
        }
        if(window.location.pathname ==="/accessories"){
            return setAccessoriesToggle(true);
        }
    },[])
    return (
        <div className='NavOptions'>
           {
               miPhoneToggle ? miPhones.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

            {
               redmiMiPhoneToggle ? redmiPhones.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

           {
               tvToggle ? tv.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

            {
               laptopToggle ? laptops.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

           {
               fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

{
               homeToggle ? home.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 

{
               audioToggle ? audio.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null               
           } 

{
               accessoriesToggle ? accessories.map((item)=>(
                   <NavCard name={item.name} price= {item.price} image = {item.image} key={item.image} />
               )):null
           } 
        </div>
    )
}

export default NavOptions
