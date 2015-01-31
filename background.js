chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    bounds: {
      'width': 1050,
      'height': 700
    }
  });
});
