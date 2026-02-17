import { selected } from "./state.js";
import { items } from "./items.js";

export function handleSelect(group, value, element) {
  selected[group] = value;

  document.querySelectorAll(`#${group} .option`).forEach(el => {
    el.classList.remove("active");
  });

  element.classList.add("active");

  checkResult();
}

function checkResult() {
  const { main, sub, skill } = selected;
  const resultBox = document.getElementById("result");

  if (main && sub && skill) {
    const foundItems = items.filter(item =>
      (item.main === main || !item.main) &&
      (item.sub === sub || !item.sub) &&
      (item.skill === skill || !item.skill)
    );

    if (foundItems.length > 0) {
      resultBox.innerHTML = foundItems.map(item => `
        <div class="item-card">
          <img src="${item.image}" />
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div>Main: ${item.main}</div>
            <div>Sub: ${item.sub}</div>
            <div>Skill: ${item.skill}</div>
          </div>
        </div>
      `).join("");
    } else {
      resultBox.innerHTML = "❌ Không có item phù hợp";
    }
  }
}

