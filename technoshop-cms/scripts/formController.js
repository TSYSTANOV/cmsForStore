import { category, form } from "./elements.js";
import { getCategory, postGoods } from "./serviceAPI.js";
import { toBase64 } from "./utils.js";

const updateCategory = async () => {
  category.textContent = "";
  const categoryList = await getCategory();

  const categoryOption = categoryList.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    return option;
  });
  category.append(...categoryOption);
};

export const formController = () => {
  updateCategory();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = [...new FormData(form)];
    // const data = Object.fromEntries(formData);
    const data = {};

    for (const [key, value] of formData) {
      if (value) {
        data[key] = value;
      }
    }
    if (data.image.size === 0) {
      delete data.image;
    } else {
      data.image = await toBase64(data.image);
    }
    // console.log(data);
    const goods = await postGoods(data);
    console.log(goods);
  });
};
