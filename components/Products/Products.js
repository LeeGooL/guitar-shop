class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      console.log(img)
      htmlCatalog += `
        <li>
          <span>${name}</span>

          <img src="${img}" />

          <span>${price}</span>

          <button>Добавить в корзину</button>
        </li>
      `;
    });
    
    const html = `
      <ul>
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();

productsPage.render();
