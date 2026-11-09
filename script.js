// Spacebar Play/Pause functionality for videos when in fullscreen mode
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the Spacebar
    if (event.code === 'Space' || event.key === ' ') {
        
        // Find if any video is currently in fullscreen mode
        const fullscreenVideo = document.fullscreenElement && document.fullscreenElement.tagName === 'VIDEO' 
            ? document.fullscreenElement 
            : null;

        if (fullscreenVideo) {
            // Prevent default browser behavior (like page scrolling) when pressing space
            event.preventDefault();
            
            // Toggle play/pause for the fullscreen video
            if (fullscreenVideo.paused) {
                fullscreenVideo.play();
            } else {
                fullscreenVideo.pause();
            }
        }
    }
});