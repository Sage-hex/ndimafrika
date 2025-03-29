// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
// import { Bar } from "recharts";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", subscription: "Premium", status: "Active" },
//     { id: 2, name: "Jane Smith", subscription: "Free", status: "Inactive" },
//   ]);

//   const [stories, setStories] = useState([
//     { id: 1, title: "African Legends", status: "Published" },
//     { id: 2, title: "Folktales of the Savannah", status: "Pending" },
//   ]);

//   const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));
//   const deleteStory = (id) => setStories(stories.filter(story => story.id !== id));
//   const publishStory = (id) => setStories(stories.map(story => story.id === id ? { ...story, status: "Published" } : story));

//   return (
//     <div className="p-6 space-y-6">
//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card>
//           <CardContent>
//             <h2 className="text-xl font-bold">Total Stories</h2>
//             <p>24 Published</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h2 className="text-xl font-bold">Users</h2>
//             <p>{users.length} Active Users</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent>
//             <h2 className="text-xl font-bold">New Submissions</h2>
//             <p>5 Pending Approval</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* User Management */}
//       <h2 className="text-2xl font-bold">Manage Users</h2>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Name</TableHead>
//             <TableHead>Subscription</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {users.map(user => (
//             <TableRow key={user.id}>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.subscription}</TableCell>
//               <TableCell>{user.status}</TableCell>
//               <TableCell>
//                 <Button variant="destructive" onClick={() => deleteUser(user.id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       {/* Story Management */}
//       <h2 className="text-2xl font-bold">Manage Stories</h2>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Title</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {stories.map(story => (
//             <TableRow key={story.id}>
//               <TableCell>{story.title}</TableCell>
//               <TableCell>{story.status}</TableCell>
//               <TableCell>
//                 {story.status === "Pending" && (
//                   <Button onClick={() => publishStory(story.id)}>Publish</Button>
//                 )}
//                 <Button variant="destructive" onClick={() => deleteStory(story.id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from "react";

const AdminDashboard = ({ isAdmin }) => {
    const [bookTitle, setBookTitle] = useState("");
    const [bookFile, setBookFile] = useState(null);
    const [books, setBooks] = useState([
        { id: 1, title: "African Heritage Vol. 1" },
        { id: 2, title: "The Roots of Our People" },
        { id: 3, title: "Legends and Folktales" }
    ]);

    const handleBookUpload = () => {
        if (bookTitle && bookFile) {
            const newBook = { id: books.length + 1, title: bookTitle };
            setBooks([...books, newBook]);
            setBookTitle("");
            setBookFile(null);
            alert(`Book "${newBook.title}" uploaded successfully!`);
        } else {
            alert("Please provide both a title and a file.");
        }
    };

    const handleDeleteBook = (bookId) => {
        setBooks(books.filter((book) => book.id !== bookId));
        alert("Book deleted successfully!");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-72 bg-gray-900 text-white p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">African Heritage Library</h2>
                <ul className="space-y-4">
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Manage Users</li>
                    {isAdmin && (
                        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Publish a Book</li>
                    )}
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Analytics</li>
                    <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

                {/* Publish a Book (Admin Only) */}
                {isAdmin && (
                    <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Publish a Book</h3>
                        <input
                            type="text"
                            placeholder="Enter book title"
                            className="w-full p-2 border rounded mb-4"
                            value={bookTitle}
                            onChange={(e) => setBookTitle(e.target.value)}
                        />
                        <input
                            type="file"
                            className="w-full p-2 border rounded mb-4"
                            onChange={(e) => setBookFile(e.target.files[0])}
                        />
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={handleBookUpload}
                        >
                            Upload Book
                        </button>
                    </div>
                )}

                {/* Book List (Admin Only) */}
                {isAdmin && (
                    <div className="mt-8 bg-white shadow-md p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Manage Books</h3>
                        <ul>
                            {books.map((book) => (
                                <li key={book.id} className="flex justify-between p-2 border-b">
                                    <span>{book.title}</span>
                                    <button
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                        onClick={() => handleDeleteBook(book.id)}
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
