# Refund review

I found the bug in the refund calculation: the service fee was being returned to the customer, even though the fee is non-refundable by policy.

The refund logic should only reimburse the ticket value, not the extra service charge. The original function was effectively treating all order components as refundable, which inflated the total.
