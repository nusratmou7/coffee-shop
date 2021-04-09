var p_total=document.getElementById('p_total')
var s_total=document.getElementById('s_total')
var total_cart=document.getElementById('total_cart')





var itm=document.querySelector('h3')

var select=document.querySelector('.select')

var button=document.getElementsByTagName('button')
for(but of button)
{
    but.addEventListener('click',(e)=>{
        var add= Number(itm.getAttribute('data-count')||0)
        itm.setAttribute('data-count',add+1);
        itm.classList.add('zero')



        
 
        var parent=e.target.parentNode;
        var clone=parent.cloneNode(true)
         select.appendChild(clone);
         clone.lastElementChild.innerText=" "

        

        if(clone){
            itm.onclick=()=>{
                select.classList.toggle('display')
            }
        }


        // var image=e.target.parentNode.querySelector('img')
        // var span=e.target.parentNode.querySelector('span')
        // var s_image=image.cloneNode(false)
        // span.appendChild(s_image)
        // span.classList.add('active')
        // setTimeout(()=>{
        //     span.removeChild(s_image)
        // span.classList.remove('active')
        // },5000)
    })
}


const decrease=(indec,itemp)=>{
    var itemval=document.getElementById(indec)
    var itemp=document.getElementById(itemp)
    if(itemval.value <= 0){
        itemval.value=0
        alert('negative item not allowed')
    }else{
        itemval.value=parseInt( itemval.value)-1
        itemval.style.background='#fff'
        itemval.style.color='#000'
        itemp.innerHTML=parseInt(itemp.innerHTML)-15;
        p_total.innerHTML=parseInt(p_total.innerHTML)-15;
        total_cart.innerHTML=parseInt(p_total.innerHTML)+parseInt(s_total.innerHTML)
    }
}
const increase=(indec,itemp)=>{
    var itemval=document.getElementById(indec)
    var itemp=document.getElementById(itemp)
    if(itemval.value >= 5){
        itemval.value=5
        alert('max 5 allowed')
        itemval.style.background='red'
        itemval.style.color='#fff'
    }else{
        itemval.value=parseInt(itemval.value)+1
        itemp.innerHTML=parseInt(itemp.innerHTML)+15;
        p_total.innerHTML=parseInt(p_total.innerHTML)+15;
        total_cart.innerHTML=parseInt(p_total.innerHTML)+parseInt(s_total.innerHTML)
    }
}