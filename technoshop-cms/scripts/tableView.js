import { category, tableGoods } from "./elements.js";
import { deleteGood } from "./serviceAPI.js";
import { currencyFormat } from "./utils.js";

function createRow({ id, title, category, price }) {
  const tr = document.createElement("tr");
  tr.className = "table-row table-goods-item";
  tr.dataset.id = id;
  tr.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormat(price)}</td>
    <td class="d-flex">
    </td>
    `;
  const btnDel = document.createElement("button");
  btnDel.className = "btn-table btn-delete";
  btnDel.innerHTML = `
  <svg width="30" height="30">
  <use xlink:href="#delete" />
  </svg>`;
  btnDel.addEventListener("click", async () => {
    console.log("delete");
    if (confirm(`Вы действительно хотите удалить товар: ${title} ?`)) {
      tr.remove();
      const result = await deleteGood(id);
      console.log(result);
    }
  });
  tr.querySelector(".d-flex").append(btnDel);
  return tr;
}

export const tableRender = (goods) => {
  tableGoods.textContent = "";
  const rows = goods.map(createRow);
  tableGoods.append(...rows);
};
