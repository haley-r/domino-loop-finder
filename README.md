# domino-loop-finder

testing finding domino style matches with a recursive function.

premise:
donor-recipient pairs contain information about the blood type of the donor and of the recipient, which do not match. the goal is to match pairs to each other so that willing donors can donate, and their recipient partners can get what they need, even if not to/from each other. for the purpose of this exercise, only exact matches count as matches.

one way to conceptualize this is of two rings of people: an inside ring of willing donors, and an outside ring of recipients. to start, people face someone they know, who they are willing to donate to, but don't match. If it's the correct group of people, in the correct order, the outer ring could take one step to the left and donors would then be across from someone whose blood type did match theirs, and everyone gets what they need.

we are looking for the right group of people, in the right arrangement to make this happen.

this function takes in an array of objects of donor-recipient pairs, and console logs an array of objects of donor recipient pairs where donors and recipients are matched domino-style, in a full loop.

shortcomings to work on:
-does not return the domino-loop array, just console logs it.
-only returns first possible solution, not all possible solutions.
