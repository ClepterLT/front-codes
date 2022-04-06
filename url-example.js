function handleShow(e) {
  e.preventDefault();
  const list = e.target.parentElement;
  const items = [...list.querySelectorAll('input[type="checkbox"]')];

  const url = new URL(window.location.href);
  let urlParams = Array.from(url.searchParams.entries());
  const urlParamsValues = urlParams.map(param => param[1]);
  let addParams = [];
  console.log('param values:', urlParamsValues);

  items.forEach((item) => {
    if(item.checked === true) {
      addParams.push(['listShow[]', item.value]);
      console.log('addParams:', addParams);
    }
  });

  const newParams = new URLSearchParams(addParams).toString();
  const newUrl = new URL(`${url.origin}${url.pathname}?${newParams}`);
  console.log(newUrl.href);

  window.location.replace(newUrl.href);
}
