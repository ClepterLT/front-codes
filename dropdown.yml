### HTML ###
<div class="cta__dropdown-wrap">
  <select name="business-type" id="business-type" class="cta__dropdown">
    <option value="" selected disabled hidden>Choose Business Type</option>
    <option value="agriculture">Agriculture</option>
    <option value="it">IT</option>
    <option value="finance">Finance</option>
  </select>
</div>



### CSS ###
.cta__dropdown-wrap {
  display: flex;
  align-items: center;
}

.cta__dropdown-wrap::after {
  content: "";
  background-image: url(assets/images/arrow-down-white.svg);
  width: 2.5rem;
  height: 2.5rem;
  display: block;
}

.cta__dropdown {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: 1.6rem;
  cursor: inherit;
  line-height: inherit;
  color: #fff;

  transition: all 0.3s;
  display: flex;
  align-items: center;
}

.cta__dropdown:hover,
.cta__dropdown:active,
.cta__dropdown:hover .cta__dropdown-wrap::after {
  color: #141416;
}

.cta__dropdown:focus {
  border: 0;
  outline: none;
}
