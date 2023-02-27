function GetProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let items = '';
        data.forEach(item => {
            items += `
            <div class="col-lg-3 g-4 mtp">
             <div class="card">
               <div class="card-top">
                 <img src="${item.image}" alt="">
               </div>
               <div class="card-bottom">
                  <h1>${item.title}</h1>
               </div>
              </div>
              <p>${item.price}₼</p>
            </div> 
            `
        })
        document.querySelector('#list').innerHTML = items

        // let input = document.querySelector('#inp');
        // input.onkeyup = function() {
        //     let search = input.value.toLowerCase()
        //     if(${item.title}.icludes(search)){

        //     } 

            
        // }



input.addEventListener('keyup', filterUsers);

    })
    .catch(err => console.log(err))
}

GetProducts();

function GetCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        let items = '<li>Roma Mirzazada <span>Web Developer</span></li>';

        data.forEach(item => {
            items += `
            <li><span id="ll" class="link">${item}</span></li>
            `
        })

        document.querySelector('.sidebarMenuInner').innerHTML = items;

        let spans = document.querySelectorAll('.link');

        for(let span of spans) {
            span.onclick = function() {
                let inner = this.innerHTML;

                fetch(`https://fakestoreapi.com/products/category/${inner}`)
                .then(res => res.json())
                .then(data => {
                    let items = '';
                    data.forEach(item => {
                        items += `
                        <div class="col-lg-3 g-4 mtp">
                         <div class="card">
                          <div class="card-top">
                            <img src="${item.image}" alt="">
                          </div>
                          <div class="card-bottom">
                             <h1>${item.title}</h1>
                          </div>
                         </div>
                         <p>${item.price}₼</p>
                        </div>
                        `
                    })
                    document.getElementById('list').innerHTML = items
                })
                .catch(err => console.log(err))
            }
        }
    })
    .catch(err => console.log(err))
}

GetCategories();
