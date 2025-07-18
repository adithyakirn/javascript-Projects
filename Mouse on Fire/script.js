const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const offX = event.clientX + window.scrollX;
  const offY = event.clientY + window.scrollY;
  const span = document.createElement("span");
  const height = Math.floor(Math.random() * 100);
  const width = Math.floor(Math.random() * 100);

  span.style.position = "absolute";
  const offsetGap = 10;
  span.style.top = `${
    offY + Math.floor(Math.random() * offsetGap) - offsetGap / 2
  }px`;
  span.style.left = `${
    offX + Math.floor(Math.random() * offsetGap) - offsetGap / 2
  }px`;
  span.style.width = `${width}px`;
  span.style.height = `${height}px`;

  const iconWrapper = document.createElement("div");
  iconWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 384 511.4"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="163.52" y1="286.47" x2="163.52" y2="500.71"><stop offset="0" stop-color="#FB6404"/><stop offset="1" stop-color="#F2BE10"/></linearGradient></defs><path fill="#E20919" d="M77.46 228.43C65.33 119.85 128.78 43.48 247.72 0c-72.85 94.5 62.09 196.88 69.53 295.03 17.44-29.75 27.34-69.48 29.3-122.55 89.18 139.92 15.25 368.59-181.02 335.73-18.02-3.01-35.38-8.7-51.21-17.17C42.76 452.8 0 369.53 0 290c0-50.69 21.68-95.95 49.74-131.91 3.75 35.23 11.73 61.51 27.72 70.34z"/><path fill="url(#a)" d="M139.16 372.49c-21.83-57.66-18.81-150.75 42.33-183.41.43 107.03 103.57 120.64 84.44 234.9 17.64-20.39 26.51-53.02 28.1-78.75 27.96 65.38 6.04 117.72-33.81 144.37-121.15 81-225.48-83.23-156.11-173.26 2.08 20.07 26.14 51.12 35.05 56.15z"/></svg>`;

  span.appendChild(iconWrapper);
  bodyEl.appendChild(span);

  requestAnimationFrame(() => {
    span.classList.add("move-up");
  });

  setTimeout(() => {
    span.remove();
  }, 3000);
});

const customCursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.clientX + "px";
  customCursor.style.top = e.clientY + "px";
});
