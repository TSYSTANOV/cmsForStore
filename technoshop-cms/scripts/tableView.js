import { category, tableGoods } from "./elements.js";
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
      <button class="btn-table btn-delete">
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
    </td>
    `;
  return tr;
}

export const tableRender = (goods) => {
  tableGoods.textContent = "";
  const rows = goods.map(createRow);
  tableGoods.append(...rows);
};
