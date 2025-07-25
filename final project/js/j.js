
if (document.querySelector('.owl-carousel')) {
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            autoplay :true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            },
            navText: ['<i class="fa-solid fa-arrow-left text-light bg-primary p-1 ps-3 pe-3 rounded-start-pill me-1 "></i>', '<i class="fa-solid fa-arrow-right text-light bg-primary  ms-1 p-1 pe-3 ps-3 rounded-end-pill "></i>']
        });
    });
}

window.addEventListener('scroll' , (e)=>{
  if(document.documentElement.scrollTop > 750){
    var ctr1 = document.getElementById('counter1')
    var i = 1000
    var s1 = setInterval(()=>{
    i+=1000
    ctr1.innerText=i
    if(i == 8000) {clearInterval(s1)}
    },200
  )
  var ctr2 = document.getElementById('counter4')
  var m =1
  var s2 = setInterval(()=>{
    m++
    ctr2.innerText = m
     if( m == 20) clearInterval(s2)
  },150)
  var ctr3 = document.getElementById('counter2')
  var n =110
  var s3 = setInterval(()=>{
    n+=100
    ctr3.innerText= n 
    if(n == 810) clearInterval(s3)
  }, 250)
   var ctr4 = document.getElementById('counter3')
   var c = 1000
   var s4 = setInterval(()=>{
    c+=100
    ctr4.innerText = c
    if(c == 2000) clearInterval(s4)
   }, 200)
  }
  
})


function handleFilter(category) {
  const cards = document.querySelectorAll(".filter-cards");
  const items = document.querySelectorAll(".ul-work li");

  // إزالة الـ active من الكل
  items.forEach((li) => li.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach((card) => {
    if (category === "all") {
      card.style.display = "block";
    } else if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
