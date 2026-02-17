import { attributes } from "./attributes.js";
import { handleSelect } from "./logic.js";

export function renderGroup(groupName) {
  const container = document.getElementById(groupName);

  attributes[groupName].forEach(attr => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = attr;
    div.onclick = () => handleSelect(groupName, attr, div);
    container.appendChild(div);
  });
}
