addPageToStatusPages("shop.html", { name: "Мясная лавка", link: "shop.html" });
displayStatusPages();

const searchInput = document.getElementById("search-input");

const rangeInput = document.querySelectorAll(".range__input input"),
    priceInput = document.querySelectorAll(".price__input"),
    range = document.querySelector(".range__slider .progress");
let priceGap = 50;

let combinedFilter;

let minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

let priceSorted = productsData.filter(item => {
    if (item.price >= minVal && item.price <= maxVal) return item;
});

const singlePage = document.getElementById("products-container");
const paginationElement = document.getElementById("pagination");

let currentPage = 1;
let itemNum = 12;

function DisplayPage(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
        let itemElement = document.createElement('div');
        itemElement.classList.add('products__item');
        itemElement.innerHTML = itemTemplate(paginatedItems, i);
        itemElement.id = paginatedItems[i].id;

        wrapper.appendChild(itemElement);
    }
    openProductPage();
    makeOrderWork();
}

function SetupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = "";

    let pageCount = Math.ceil(items.length / rowsPerPage);

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }

    let prevButton = document.createElement('button');
    let nextButton = document.createElement('button');

    prevButton.classList.add('prev-btn');
    nextButton.classList.add('next-btn');

    prevButton.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;
    nextButton.innerHTML = `<img src="img.svg/pagination-arrow.svg" alt="">`;

    prevButton.addEventListener('click', function () {
        if (currentPage != 1) {
            currentPage--;
            DisplayPage(items, singlePage, itemNum, currentPage);

            let currentButton = document.querySelector("#pagination button.active");
            currentButton.classList.remove('active');

            currentButton.previousElementSibling.classList.add('active');
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < pageCount) {
            currentPage++;
            DisplayPage(items, singlePage, itemNum, currentPage);

            let currentButton = document.querySelector("#pagination button.active");
            currentButton.classList.remove('active');

            currentButton.nextElementSibling.classList.add('active');
        }
    });

    wrapper.prepend(prevButton);
    wrapper.append(nextButton);
}

function PaginationButton(page, items) {
    let button = document.createElement('button');

    button.innerText = page;
    button.classList.add('categories__pagination-btn');

    if (currentPage == page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function () {
        currentPage = page;
        DisplayPage(items, singlePage, itemNum, currentPage);

        let currentButton = document.querySelector("#pagination button.active");

        if (currentButton) {
            currentButton.classList.remove('active');
        }
        button.classList.add('active');
    });

    return button;
}

function Filter(nameOfInput) {
    let selected = document.querySelector(`input[name='${nameOfInput}']:checked`).value;
    let arrOfSelected;

    if (nameOfInput == "kind") {
        arrOfSelected = productsData.filter(item => {
            if (item.title.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });

    } else if (nameOfInput == "sellType") {
        arrOfSelected = productsData.filter(item => {
            if (item.sellType.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });

    } else if (nameOfInput == "production") {
        arrOfSelected = productsData.filter(item => {
            if (item.production.toLowerCase().includes(selected.toLowerCase())) {
                return item;
            }
        });
    }

    return arrOfSelected;
}

function findCommonElement(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {

                result.push(array1[i]);
            }
        }
    }

    return result;
}

function findCommonElementOf3(array1, array2, array3) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            for (let k = 0; k < array3.length; k++)
                if (array1[i] == array3[k] && array1[i] == array2[j]) {

                    result.push(array1[i]);
                }
        }
    }

    return result;
}




function resetFilter(nameOfInput) {
    var el = document.getElementsByName(nameOfInput);
    for (var i = 0; i < el.length; i++) {
        el[i].checked = false;
    }

    rangeInput[0].value = 0;
    rangeInput[1].value = 1000;
    priceInput[0].value = 0;
    priceInput[1].value = 1000;

    range.style.left = 0;
    range.style.right = 0;

    searchInput.value = "";

    DisplayPage(productsData, singlePage, itemNum, currentPage);
    SetupPagination(productsData, paginationElement, itemNum);
}

$("#plus-minus-icon__kind").on('click', function () {
    $("#v-line__kind").toggleClass('hide');
    $("#filter__kind-form").toggleClass('hide');
    $("#filter__title-kind").toggleClass('hidden');
});

$("#plus-minus-icon__price").on('click', function () {
    $("#v-line__price").toggleClass('hide');
    $("#filter__price-form").toggleClass('hide');
    $("#filter__title-price").toggleClass('hidden');
});

$("#plus-minus-icon__prod").on('click', function () {
    $("#v-line__prod").toggleClass('hide');
    $("#filter__prod-form").toggleClass('hide');
    $("#filter__title-prod").toggleClass('hidden');
});

$(".scheme__text").on('click', function () {
    $("body").toggleClass('no-scroll');
    $("#modal-scheme").toggleClass("show");
})

$("#modal-close").on('click', function () {
    $("#modal-scheme").toggleClass("show");
    $("body").toggleClass('no-scroll');
});

DisplayPage(productsData, singlePage, itemNum, currentPage);
SetupPagination(productsData, paginationElement, itemNum);

document.getElementById("search-btn").addEventListener('click', function () {
    const afterSearch = productsData.filter((item) => {
        return item.title.toLowerCase().includes(searchInput.value.toLowerCase());
    });

    DisplayPage(findCommonElement(priceSorted, afterSearch), singlePage, itemNum, currentPage);
    SetupPagination(findCommonElement(priceSorted, afterSearch), paginationElement, itemNum);
});

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "price__input price__input--min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        minVal = parseInt(rangeInput[0].value);
        maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        };

        priceSorted = productsData.filter(item => {
            if (item.price >= minVal && item.price <= maxVal) return item;
        });

        if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("sellType"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);

        } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
            combinedFilter = findCommonElement(priceSorted, Filter("kind"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("kind"), Filter("sellType"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("kind"), Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElementOf3(priceSorted, Filter("sellType"), Filter("production"));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked") && document.querySelector("input[name='kind']:checked")) {
            combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("kind"), Filter("sellType"), Filter("production")));


            DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
            SetupPagination(combinedFilter, paginationElement, itemNum);
        } else {
            DisplayPage(priceSorted, singlePage, itemNum, currentPage);
            SetupPagination(priceSorted, paginationElement, itemNum);

        }
    });
});

$("input[name='kind']").on('click', function () {
    if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("kind"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("kind"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='sellType']:checked") && document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("kind"), Filter("sellType"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("kind")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("kind")), paginationElement, itemNum);
    }
})

$("input[name='sellType']").on('click', function () {
    if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("sellType"), Filter("kind")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='production']:checked") && !document.querySelector("input[name='kind']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("sellType"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='production']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("sellType"), Filter("kind"), Filter("production")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("sellType")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("sellType")), paginationElement, itemNum);
    }
})

$("input[name='production']").on('click', function () {

    if (document.querySelector("input[name='kind']:checked") && !document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("production"), Filter("kind")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);

    } else if (document.querySelector("input[name='sellType']:checked") && !document.querySelector("input[name='kind']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElement(Filter("production"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else if (document.querySelector("input[name='kind']:checked") && document.querySelector("input[name='sellType']:checked")) {
        combinedFilter = findCommonElement(priceSorted, findCommonElementOf3(Filter("production"), Filter("kind"), Filter("sellType")));

        DisplayPage(combinedFilter, singlePage, itemNum, currentPage);
        SetupPagination(combinedFilter, paginationElement, itemNum);
    } else {
        DisplayPage(findCommonElement(priceSorted, Filter("production")), singlePage, itemNum, currentPage);
        SetupPagination(findCommonElement(priceSorted, Filter("production")), paginationElement, itemNum);
    }
});

$("#reset-filter").on("click", function () {
    resetFilter("kind");
    resetFilter("sellType");
    resetFilter("production");
});

function openProductPage() {
    let currentItems = document.querySelectorAll(".products__item-img");
    currentItems.forEach(el => {
        el.addEventListener('click', function () {

            for (let i = 0; i < productsData.length; i++) {
                if (onClick(el) === productsData[i].id) {
                    clickedTitle = productsData[i].title;
                    clickedPrice = productsData[i].price;
                    clickedDescription = productsData[i].description;
                    clickedUseful = productsData[i].useful;
                    clickedImg = productsData[i].imgSrc;

                    localStorage.setItem("clickedTitle", clickedTitle);
                    localStorage.setItem("clickedPrice", clickedPrice);
                    localStorage.setItem("clickedDescription", clickedDescription);
                    localStorage.setItem("clickedUseful", clickedUseful);
                    localStorage.setItem("clickedImg", clickedImg);

                    localStorage.setItem("openedProduct", JSON.stringify(productsData[i]));

                }
            }
            resetFilter("kind");
            resetFilter("sellType");
            resetFilter("production");
            location.href = "productPage.html";
        })
    });
}