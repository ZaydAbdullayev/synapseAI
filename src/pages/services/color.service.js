export const generateComplexColor = () => {
  const minBrightness = 0;
  const maxBrightness = 255;
  const r = Math.floor(
    Math.random() * (maxBrightness - minBrightness + 1) + minBrightness
  );
  const g = Math.floor(
    Math.random() * (maxBrightness - minBrightness + 1) + minBrightness
  );
  const b = Math.floor(
    Math.random() * (maxBrightness - minBrightness + 1) + minBrightness
  );
  const darkness = Math.random() * 0.5;
  const darkenedR = Math.max(0, r - darkness * maxBrightness);
  const darkenedG = Math.max(0, g - darkness * maxBrightness);
  const darkenedB = Math.max(0, b - darkness * maxBrightness);
  return `rgb(${Math.round(darkenedR)}, ${Math.round(darkenedG)}, ${Math.round(
    darkenedB
  )})`;
};
