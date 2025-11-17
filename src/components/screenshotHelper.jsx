export const takeScreenshot = (canvasRef, videoRef) => {
  if (!canvasRef.current || !videoRef.current) return; // Ensure both refs are defined

  // Create a new canvas for compositing
  const compositeCanvas = document.createElement('canvas');
  const ctx = compositeCanvas.getContext('2d');

  // Set canvas size to match video dimensions
  const videoWidth = videoRef.current.videoWidth || 1280;
  const videoHeight = videoRef.current.videoHeight || 720;

  compositeCanvas.width = videoWidth;
  compositeCanvas.height = videoHeight;

  // Draw the video frame as background
  ctx.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

  // Draw the 3D canvas overlay on top
  ctx.drawImage(canvasRef.current, 0, 0, videoWidth, videoHeight);

  // Create download link
  const link = document.createElement("a");
  link.setAttribute("download", "virtual-tryon.png");
  link.setAttribute(
    "href",
    compositeCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
  link.click();
};
  