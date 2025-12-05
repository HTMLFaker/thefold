export function getKSTDateString() {
  const now = new Date();
  // UTC timestamp + 9시간(ms)
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10); // YYYY-MM-DD
}
