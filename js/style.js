
//global's Div
let div=null;
/*-------------------------------------------------------
  RGB color randomly generate and backgroundcolor change
---------------------------------------------------------*/
// window.onload = () =>{
// 	main();
// }

// function main ()
// {
//   const root = document.getElementById('root');
//   const btn = document.getElementById('change-btn');

//   btn.addEventListener("click",function(){
//   	root.style.backgroundColor = generateRGBColor ();
//   });
// }

// function generateRGBColor ()
// {
// 	const red   = Math.floor(Math.random()*255);
// 	const green = Math.floor(Math.random()*255);
// 	const blue  = Math.floor(Math.random()*255);

// 	return `rgb(${red},${green},${blue})`;	
// }

/*-----------------------------------------
  Hex color randomly generate input field
--------------------------------------------*/

window.onload =() =>{

	main();
}


function main ()
{
  const root   = document.getElementById('root');
  const btn    = document.getElementById('change-btn');
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copy-btn');

  btn.addEventListener('click',function(){
  	bgColor = generateHexColor();
  	root.style.backgroundColor = bgColor;
  	output.value = bgColor;
  });

  copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(output.value);
    if(div!=null)
    {
      div.remove();
      div=null;
    }
    generateTosteMessage(`${output.value} copied`);
  });
}



function generateHexColor () 
{
	const red   = Math.floor(Math.random()*255);
	const green = Math.floor(Math.random()*255);
	const blue  = Math.floor(Math.random()*255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateTosteMessage(msg)
{
  div = document.createElement('div');
  div.innerText=msg;
  div.className='toast-msg toast-msg-slide-in';

  div.addEventListener("click",function(){
    div.classList.remove('toast-msg-slide-in');
    div.classList.add('toast-msg-slide-out');
    div.addEventListener("animationend",function(){
      div.remove();
      div=null;
    });
  });

  

  document.body.appendChild(div);
}



