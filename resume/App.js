import React, { useState }  from "react";

import './App.css';

function App(){
  const[value , setValue]=useState({
    FullName:"" ,
    PhoneNumber:"",
    Email:"",
    Address:"",
    Facebook:"",
    Instagram:"",
    LinkedIn:"",
    Objective:"",
    Experience:"",
    AcademicQualification:"",
  
    
  });

   //const[generate , SetGenerate]=useState({

   //})


  const handleFullNameInputChange = (event)=>{
    setValue({...value , FullName: event.target.value})
  }

  const handlePhoneNumberInputChange = (event)=>{
    setValue({...value , PhoneNumber: event.target.value})
  }

  const handleAddressInputChange = (event)=>{
    setValue({...value , Address: event.target.value})
  }
  
  const handleEmailInputChange = (event)=>{
    setValue({...value , Email: event.target.value})
  }

  const handleFacebookInputChange = (event)=>{
    setValue({...value , Facebook: event.target.value})
  }

  const handleInstagramInputChange = (event)=>{
    setValue({...value , Instagram: event.target.value})
  }

  const handleLinkedInInputChange = (event)=>{
    setValue({...value , LinkedIn: event.target.value})
  }

  const handleObjectiveInputChange = (event)=>{
    setValue({...value , Objective: event.target.value})
  }

  const handleExperienceInputChange = (event)=>{
    setValue({...value , Experience: event.target.value})
  }

  const handleAcademicQualificationInputChange = (event)=>{
    setValue({...value , AcademicQualification: event.target.value})
  }

  // const handlegenerated = ()=>{

  // }


  return(
  <>
  
    <h1>RESUME GENERATOR</h1>
    <h2>Personal Information</h2>
    <div className="FullName"/>
    <div className='header'>FullName</div>
    <input type="text" placeholder="Enter Here" value={value.FullName} onChange={handleFullNameInputChange}/>
  {/* <span>Please enter the FullName</span> */}
   
    <div className="PhoneNumber"/>
    <div className='header'>PhoneNumber</div>
    <input type="text" placeholder="Enter Here" value={value.PhoneNumber} onChange={handlePhoneNumberInputChange}/>

    <div className="Email"/>
    <div className='header'>Email</div>
    <input type="text" placeholder="Enter Here" value={value.Email} onChange={handleEmailInputChange}/>
    
    <div className="Address"/>
    <div className='header'>Address</div>
    <input type="text" placeholder="Enter Here" value={value.Address} onChange={handleAddressInputChange}/>
    
    <h6>Important Links</h6>
    
    <div className="Facebook"/>
    <div className='header'>Facebook</div>
    <input type="text" placeholder="Enter Here"onChange={handleFacebookInputChange}/>
    
    <div className="LinkedIn"/>
    <div className='header'>LinkedIn</div>
    <input type="text" placeholder="Enter Here" onChange={handleLinkedInInputChange}/>
    
    <div className="Instagram"/>
    <div className='header'>Instagram</div>
    <input type="text" placeholder="Enter Here" onChange={handleInstagramInputChange}/>

    <h3>Professional Information</h3>
    <div className="Objective"/>
    <div className='header'>Objective</div>
    <input type="text" placeholder="Enter Here" onChange={handleObjectiveInputChange}/>

    <div className="Experience"/>
    <div className='header'>Experience</div>
    <input type="text" placeholder="Enter Here" onChange={handleExperienceInputChange}/>


    <div className="AcademicQualifications"/>
    <div className='header'>AcademicQualifications</div>
    <input type="text" placeholder="Enter Here" onChange={handleAcademicQualificationInputChange}/>
   
    
    
    
   </>
    
  )
}

export default App;
