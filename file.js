if (location.host === "www.twitch.tv") {
  (async function() {
     while (true) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      const sunege = document.querySelector('[aria-label="ボーナスを受け取る"]');
      if (sunege && window.getComputedStyle(sunege).display !== 'none') {
        sunege.click();
      }
    }
  })();
}
