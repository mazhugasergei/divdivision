let firstDiv = true

function fun(){
  document.querySelectorAll('div').forEach(item => {
    item.addEventListener('click', () => {
      if(!item.hasChildNodes()){
        let h1 = document.querySelectorAll('h1')
        item.style.display = "flex"
        if(item.offsetWidth < item.offsetHeight){
          item.style.flexFlow = "column"
          if(firstDiv){
            h1[0].style.left = "49%"
            h1[0].style.background = "linear-gradient(to bottom, #000, #000 50%, transparent 50%, transparent)"
            h1[1].style.left = "51%"
            h1[1].style.background = "linear-gradient(to bottom, transparent 50%, transparent, #000 50%, #000)"
            setTimeout(()=>{
              h1.forEach((h)=>{
                h.style.transition = "1s"
                h.style.opacity = "0"
            })}, 500)
            firstDiv = false
          }
        }
        else{
          if(firstDiv){
            h1[0].style.top = "49%"
            h1[0].style.background = "linear-gradient(to right, #000, #000 50%, transparent 50%, transparent)"
            h1[1].style.top = "51%"
            h1[1].style.background = "linear-gradient(to right, transparent 50%, transparent, #000 50%, #000)"
            setTimeout(()=>{
              h1.forEach((h)=>{
                h.style.transition = "1s"
                h.style.opacity = "0"
            })}, 500)
            firstDiv = false
          }
        }
        item.appendChild(document.createElement('div'))
        item.appendChild(document.createElement('div'))
        fun()
      }
    })
  })
}

fun()