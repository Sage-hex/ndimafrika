// import { useState } from "react";

// export default function BooksPage() {
//   const [books, setBooks] = useState([
//     { id: 1, title: "📖 African Legends" },
//     { id: 2, title: "📚 Tales of the Savannah" },
//   ]);

//   const deleteBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">📖 Published Books</h2>
//       <ul className="bg-white p-6 rounded-lg shadow-lg divide-y divide-gray-300">
//         {books.map((book) => (
//           <li key={book.id} className="p-3 flex justify-between items-center">
//             {book.title}
//             <button
//               className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
//               onClick={() => deleteBook(book.id)}
//             >
//               ❌ Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button className="mt-6 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
//         📖 Publish New Book
//       </button>
//     </div>
//   );
// }


import { useState } from "react";
import PublishNewBook from "./PublishNewBook"; // Import the component

export default function BooksPage({ onNavigate }) {
  const [books, setBooks] = useState([
    { id: 1, title: "📖 African Legends" },
    { id: 2, title: "📚 Tales of the Savannah" },
  ]);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="pt-8 p-2 md:p-6">
      <h2 className="text-2xl font-bold mb-4">📖 Published Books</h2>
      <ul className="bg-white p-2 md:p-6 rounded-lg shadow-lg divide-y divide-gray-300">
        {books.map((book) => (
          <li key={book.id} className="p-3 flex justify-between items-center">
            {book.title}
            <button
              className="md:px-4 md:py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={() => deleteBook(book.id)}
            >
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Button to navigate to PublishNewBook */}
      <button
        className="mt-6 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        onClick={() => onNavigate("publish")}
      >
        📖 Publish New Book
      </button>
    </div>
  );
}
