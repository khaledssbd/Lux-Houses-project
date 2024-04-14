import toast from 'react-hot-toast';

//get
export const getFavouriteHouses = () => {
  let houses = [];
  const favouriteHouses = localStorage.getItem('luxHouzezFavouriteHouses');
  if (favouriteHouses) {
    houses = JSON.parse(favouriteHouses);
  }
  return houses;
};

//set
export const addToFavourite = houseId => {
  let oldHouses = getFavouriteHouses();
  const isExist = oldHouses.find(b => b === houseId);
  if (isExist) {
    return toast.error('This house is already in your favourite list!');
  }
  oldHouses.push(houseId);
  localStorage.setItem('luxHouzezFavouriteHouses', JSON.stringify(oldHouses));
  toast.success('The house is successfully added to your favourite list!');
};

//delete
export const removeFromFavourite = id => {
  let houses = getFavouriteHouses();
  const remaining = houses.filter(b => b !== id);
  localStorage.setItem('luxHouzezFavouriteHouses', JSON.stringify(remaining));
  toast.success('The house is successfully removed from your favourite list!');
};

// For other use
// get
// export const getWishedBooks = () => {
//   let books = [];
//   const storedBooks = localStorage.getItem('visiting');
//   if (storedBooks) {
//     books = JSON.parse(storedBooks);
//   }
//   return books;
// };

//set
// export const setId = bookId => {
//   let oldBooks = getWishedBooks();
//   const isExist = oldBooks.find(b => b === bookId);
//   if (isExist) {
//     return toast.error('This book is already read!');
//   }
//   oldBooks.push(bookId);
//   localStorage.setItem('visiting', JSON.stringify(oldBooks));
//   toast.success('The Book is successfully marked as read!');
// };

//delete
// export const deleteBook = id => {
//   let books = getWishedBooks();
//   const remaining = books.filter(b => b !== id);
//   localStorage.setItem('visiting', JSON.stringify(remaining));
// };
