// Function to boost the volume of all audio elements
function boostVolume(factor) {
    const audios = document.querySelectorAll('audio, video');
    audios.forEach(audio => {
      audio.volume = Math.min(audio.volume * factor, 1);
    });
  }
  
  // Listen for messages from the popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'boostVolume') {
      boostVolume(message.factor);
      sendResponse({result: 'Volume boosted'});
    }
  });
  