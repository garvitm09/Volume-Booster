document.getElementById('boostButton').addEventListener('click', () => {
    const factor = document.getElementById('volumeRange').value;
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {command: 'boostVolume', factor: parseFloat(factor)}, (response) => {
        console.log(response.result);
      });
    });
  });
  