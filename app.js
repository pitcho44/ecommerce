async function getProducts() {
    let url = 'https://fakestoreapi.com/products';
     try{
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let products = await getProducts();
    let html = '';
    products.forEach(product => {
        let htmlSegment = `<div class="user">
                            <img src="${product.image}" class="image">
                            <h2>${product.title}</h2> <h3>${product.description}</h3>
                            <div class="email">${product.category}</div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.card-body');
    container.innerHTML = html;
}

renderUsers();
