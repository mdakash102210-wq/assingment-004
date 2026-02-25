1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById — শুধুমাত্র ID দিয়ে একটাই element খোঁজে
getElementsByClassName — শুধুমাত্র Class দিয়ে খোঁজে
querySelector — যেকোনো CSS selector দিয়ে প্রথম match খোঁজে
querySelectorAll — সব match খোঁজে

2. How do you create and insert a new element into the DOM?
   Ans: document.createElement('p')
   document.createElement Ata mul kaj holo New tag create kora.

3. What is Event Bubbling? And how does it work?
   Ans: Event Bubbling ব্যবহার করে আমরা parent element থেকে child element–এর event নিয়ন্ত্রণ করতে পারি।
   কোনো element–এ click করলে
   event প্রথমে সেই element–এ trigger হয়
   তারপর তার parent–এ যায়
   তারপর আরও উপরের element–এ যায়
   এভাবেই উপরের দিকে bubble করে

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans: Event Delegation হলো এমন একটি পদ্ধতি যেখানে
   আমরা child element–এ আলাদা আলাদা event না দিয়ে,
   একটা parent element–এ event দিই,
   আর parent–এর মাধ্যমেই সব child কে নিয়ন্ত্রণ করি।
   এটা কাজ করে Event Bubbling এর কারণে।

5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault এটা browser এর default কাজ বন্ধ করে। Submit করলে page reload হয়. browser এর default behaviour বন্ধ করে
   stopPropagation এটা event কে উপরের দিকে যাওয়া বন্ধ করে
   মানে Bubbling বন্ধ করে।
