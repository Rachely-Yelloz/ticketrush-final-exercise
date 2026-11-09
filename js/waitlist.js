function joinWaitlist(list, email) {
  const normalized = String(email || '').trim().toLowerCase();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(normalized)) return list.slice();
  if (list.some((item) => item.toLowerCase() === normalized)) return list.slice();

  return [...list, normalized];
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
