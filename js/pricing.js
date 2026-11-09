// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_DISCOUNT = 0.2;
const STUDENT_DISCOUNT = 0.15;
const MEMBER_MAX_TICKETS = 6;

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  const safeQty = Number(qty);
  const member = Boolean(isMember);
  const student = Boolean(isStudent);
  const limit = maxTickets(member);

  if (!Number.isInteger(safeQty) || safeQty < 1 || safeQty > limit) {
    return null;
  }

  const discountRate = Math.max(
    member ? MEMBER_DISCOUNT : 0,
    student ? STUDENT_DISCOUNT : 0
  );
  const discountedTicketPrice = TICKET_PRICE * (1 - discountRate);
  return safeQty * (discountedTicketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE,
    SERVICE_FEE,
    MAX_TICKETS,
    MEMBER_DISCOUNT,
    STUDENT_DISCOUNT,
    MEMBER_MAX_TICKETS,
    maxTickets,
    calcTotal
  };
}
