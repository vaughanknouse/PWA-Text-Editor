const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// Event listener for the 'beforeinstallprompt' event
// This event is fired when the browser is about to show the install prompt
window.addEventListener('beforeinstallprompt', (event) => {
  // Store the event so it can be triggered later
  window.deferredPrompt = event;
  // Make the install button visible by removing the 'hidden' class
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// Event listener for the install button click
butInstall.addEventListener('click', async () => {
  // Get the stored 'beforeinstallprompt' event
  const promptEvent = window.deferredPrompt;

  // If the event doesn't exist, exit the function
  if (!promptEvent) {
    return;
  }

  // Show the install prompt to the user
  promptEvent.prompt();

  // Clear the stored event after the prompt is shown
  window.deferredPrompt = null;

  // Hide the install button by adding the 'hidden' class
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// Listen for the 'appinstalled' event, which is fired when the app is successfully installed
window.addEventListener('appinstalled', (event) => {
  // Clear the stored 'beforeinstallprompt' event as it is no longer needed
  window.deferredPrompt = null;
});
