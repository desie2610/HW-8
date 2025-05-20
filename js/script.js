const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ',';
  }
}

console.log(string); 


const friend = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let strings = friend.join(',');

console.log(strings); 


//=========================


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  
  const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);

if (index !== -1) {
  cards.splice(index, 1);
}

console.log(cards);


const cardToInsert = 'Карточка-6';
const insertIndex = 0; 

cards.splice(insertIndex, 0, cardToInsert);

console.log(cards);



const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);

if (updateIndex !== -1) {
  cards[updateIndex] = 'Оновлена карточка-4';
}

console.log(cards);

