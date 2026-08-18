const copyButton = document.querySelector("[data-copy-button]");
const bibtex = document.getElementById("bibtex");

copyButton?.addEventListener("click", async () => {
  if (!bibtex) return;

  try {
    await navigator.clipboard.writeText(bibtex.textContent);
    copyButton.textContent = "Copied";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copy BibTeX";
  }, 1800);
});
