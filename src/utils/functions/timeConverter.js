export function timeConverter(mins) {
  const hours = Math.floor(mins / 60); // округлит в меньшую сторону
  const minutes = mins % 60;

  if (minutes > 0) {
    return `${hours}ч${minutes}м`;
  } else {
    return `${hours}ч`;
  }
}
