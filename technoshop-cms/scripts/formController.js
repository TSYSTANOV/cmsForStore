import { category, form } from "./elements.js";
import { showPreview } from "./previewController.js";
import { BASE_URL, getCategory, getGoods, postGoods } from "./serviceAPI.js";
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

export const fillingForm = async(id) => {
  const data = await getGoods(id)
  form.title.value = data.title
  form.category.value = data.category
  form.description.value = data.description.join('\n')
  form.price.value = data.price
  form.display.value = data.display
  form.imagesave.value = data.image
  console.log(data)
  showPreview(BASE_URL + '/' + data.image)
}