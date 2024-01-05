"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const select =
    document.querySelector("select[name='g']") ||
    document.querySelector("select[name='to_forum_id']") ||
    document.querySelector("#search_forum");

  if (!select) return;

  const br = document.createElement("br");
  const selectParent = select.parentNode;
  selectParent.insertBefore(br, select);

  const searchInput = document.createElement("input");
  searchInput.setAttribute("class", "inputbox");
  searchInput.setAttribute(
    "style",
    `width: ${select.offsetWidth}px; margin-bottom: 1%;`
  );
  
  if (document.URL.includes("adm/index.php")) {
    `width: ${select.offsetWidth}px; margin-bottom: 1%; margin-top: 1%`
  }
  searchInput.setAttribute("placeholder", "Search...");
  selectParent.insertBefore(searchInput, br);

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    let firstMatchedOption = null;

    for (const option of select.options) {
      const optionText = option.text.toLowerCase();
      const display = optionText.includes(searchTerm) ? "block" : "none";
      option.style.display = display;
      if (display === "block" && !firstMatchedOption) {
        firstMatchedOption = option;
      }
    }

    if (firstMatchedOption) {
      select.value = firstMatchedOption.value;
    }
  });
});
