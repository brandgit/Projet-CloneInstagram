window.onload = () => {
  const button_switchers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < button_switchers.length; i++) {
    const button_switcher = button_switchers[i];
    const page_id = button_switcher.dataset.button;

    button_switcher.addEventListener("click", () => {
      document
        .querySelector(".buttons .button.is-active")
        .classList.remove("is-active");
      button_switcher.parentNode.classList.add("is-active");

      SwitchPage(page_id);
    });
  }
};

function SwitchPage(page_id) {
  console.log(page_id);

  const current_page = document.querySelector(".pages .page.is-active");
  current_page.classList.remove("is-active");

  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );
  next_page.classList.add("is-active");
}
