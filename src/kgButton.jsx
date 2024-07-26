


function kgButton(){
  let Myname = ()=>{
    return "Manoj Shrestha";
  }
  let randomNbr = Math.random()*100;
  return (
 <div>

<p>My name is {Myname()}</p>
<h1 style={{'backgroundColor':'red' }}>The random number is { Math.round(randomNbr)}</h1>

 </div>



  )
}
export default  kgButton;