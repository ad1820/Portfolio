export const navigateTo = (path) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
  }, 0);
};
