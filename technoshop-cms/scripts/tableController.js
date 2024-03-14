import { tableGoods, modal } from "./elements.js";
import {modalController} from "./modalController.js";
import { getGoods } from "./serviceAPI.js";
import { tableRender } from "./tableView.js";

export const tableController = async () => {

  modalController({
    modal,
    classClose:'btn-close',
    classOpen:'d-block',
    delegation:{
    parent:tableGoods,
    target:'.table-row',
    targetExclude:'.btn-delete'
  }})
  const goods = await getGoods();
  tableRender(goods);
};
