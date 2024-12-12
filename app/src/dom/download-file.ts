export const downloadFile = (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.style.display = "none";
  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);
  requestAnimationFrame(() => {
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  });
};
