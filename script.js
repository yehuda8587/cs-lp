    let productImg = $('#product-img');
    let url = productImg.attr('src');
    let productTitle = $('#product-title');
    let productPara = $('#product-para');
    let checkoutBtn = $('#btnCheckout');

    $('#btnProduct1').on('click', function (e) {
        productImg.attr('src', './assets/products/all.jpg'); //change picture
        productTitle.text('Buy IT ALL');
        productPara.text('Our entire line is ready FOR YOU');
        checkoutBtn.attr('href', 'https://www.yahoo.com');
    });

    $('#btnProduct2').on('click', function (e) {
        productImg.attr('src', './assets/products/singlepack.jpg'); //change picture
        productTitle.text('single pack');
        productPara.text('our amazing single pack');
        checkoutBtn.attr('href', 'https://www.yahoo.com');
    });

    $('#btnProduct3').on('click', function (e) {
        productImg.attr('src', './assets/products/triplepack.jpg'); //change picture
        productTitle.text('Tirple Pack');
        productPara.text('Best VALUE for you');
        checkoutBtn.attr('href', 'https://www.yahoo.com');
    });

$('#btnProduct4').on('click', function (e) {
    productImg.attr('src', './assets/products/triplepack.jpg'); //change picture
    productTitle.text('Tirple Pack');
    productPara.text('Best VALUE for you');
    checkoutBtn.attr('href', 'https://www.yahoo.com');
});


