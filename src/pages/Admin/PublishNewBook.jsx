

import { useState } from "react";

export default function PublishNewBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setCoverImage(file);
    }
  };

  const handlePublish = () => {
    if (!bookTitle || !description || !coverImage) {
      alert("Please fill in all fields and upload a book cover.");
      return;
    }
    alert("📚 Book published successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📖 Publish New Book</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Form */}
        <div>
          <label className="block text-lg font-semibold mb-2">Book Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter book title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <label className="block text-lg font-semibold mt-4 mb-2">Short Description</label>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Write a short description..."
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label className="block text-lg font-semibold mt-4 mb-2">Book Cover</label>
          <input type="file" className="w-full" onChange={handleImageUpload} />
          <button
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            onClick={handlePublish}
          >
            📢 Publish Book
          </button>
        </div>
        {/* Preview Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">📚 Preview</h3>
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            {preview ? (
              <img src={preview} alt="Book Cover" className="w-full h-60 object-cover rounded-lg mb-4" />
            ) : (
              <div className="w-full h-60 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
                📷 No cover uploaded
              </div>
            )}
            <h4 className="text-lg font-bold">{bookTitle || "Book Title"}</h4>
            <p className="text-sm text-gray-600">{description || "Short description will appear here..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
