// עיצוב מחירים לתצוגה
function formatPrice(amount) {
  return '₪' + Number(amount).toFixed(2);
}

if (typeof module !== 'undefined') {
  module.exports = { formatPrice };
}
