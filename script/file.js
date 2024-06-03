if (location.host === "www.twitch.tv") {
  (async function() {
     while (true) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const sunege = document.querySelector('[aria-label="ボーナスを受け取る"]');
      console.log("すね毛",sunege)
      if (sunege && window.getComputedStyle(sunege).display !== 'none') {
        sunege.click();
      }
    }
  })();
}
