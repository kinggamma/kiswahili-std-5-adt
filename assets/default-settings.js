// Seed reader defaults only when learner has not chosen a value yet.
(function () {
  try {
    if (window.localStorage.getItem("describeImagesMode") === null) {
      window.localStorage.setItem("describeImagesMode", "true");
    }
  } catch (_error) {
    // Storage may be unavailable in restricted browser contexts.
  }
})();
