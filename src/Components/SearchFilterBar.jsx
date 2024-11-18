import { useState } from "react";
import { Button } from "@/components/ui/button"
function SearchFilterBar() {
    const [country,setCountry] =useState('');
    function handleCountry(e){
        setCountry(e.target.value)
    } 
    console.log(country)
  return (
    <div>
       <Button>Click me</Button>
      <input type="text" placeholder="Search fo a country..." 
      onChange={handleCountry}/>
    </div>
  );
}

export default SearchFilterBar;
