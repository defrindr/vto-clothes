export const takeScreenshot = (canvasRef) => {
    if (!canvasRef.current) return; // Ensure canvasRef is defined
  
    const link = document.createElement("a");
    link.setAttribute("download", "screenshot.png");
    link.setAttribute(
      "href",
      canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
  };
  