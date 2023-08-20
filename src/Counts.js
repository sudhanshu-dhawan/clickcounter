import React, {useEffect} from 'react';







export default function Counts() {

    let count= 0;
    // let clicked = false;

    useEffect(()=>{
        if(localStorage.getItem("Count"))
        {
        document.getElementById('start').classList.add('none');
        console.log('already clicked');
        // clicked=true;
        // setText("You have already clicked.");
        count = localStorage.getItem("Count");
        document.getElementById('already').classList.remove('none');
        document.getElementById('already').innerHTML = `<div>You have already clicked</div><br><br><div>Count : ${count}</div>`;
        }
    });

    

   

const increment = ()=>{
  count++;
  document.getElementById("clickcount").innerHTML=count;
  console.log(count);

}

const handleclick = ()=>{
    
        
    var countdown = document.getElementById("countdown");
    var time=10;
    

    

    var timer = setInterval(function(){
        countdown.innerHTML = time + " seconds left";
        time--;
        if(time<0){
            clearInterval(timer);
            
            countdown.innerHTML = "TIME UP!!!";

            document.getElementById('click').classList.add('none');
            localStorage.setItem("Count",count);
           
        }
        
    } , 1000);

    setTimeout(()=>{
        document.getElementById('click').classList.remove('none');
        document.getElementById('start').classList.add('none');
        document.getElementById('clicks').classList.remove('none');
    },1000);
     
    
}

  return (
    <>
      
    <div className='top'>
      
      <button className='button btn btn-success' id='start' onClick={handleclick} 
      >START</button>
      
     <div id='countdown'></div>
     
     <div id='counter'>
        <button className='button2 btn btn-success none' id='click' onClick={increment}>CLICK BUTTON</button>
         <div id='clicks' className='none'>
            <span>CLICKS :</span>
            <span id='clickcount' > 0</span> 
        </div>

     </div>
     <div id='already' className='none'></div>
     
    </div>
    </>
  )
}
