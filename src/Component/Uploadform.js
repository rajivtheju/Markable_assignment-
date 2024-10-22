import React, { useState } from "react";
import { db, storage } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./UploadForm.css"; // Import your CSS file

const UploadForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");
  const [uploadDate, setUploadDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      // Step 1: Upload file to Firebase Storage
      const storageRef = ref(storage, `documents/${file.name}`);
      await uploadBytes(storageRef, file);

      // Step 2: Get the file's download URL from Firebase Storage
      const downloadURL = await getDownloadURL(storageRef);

      // Debugging: Log the form data before sending it to Firestore
      console.log({
        name,
        cost,
        subject,
        uploadDate,
        fileName: file.name,
        fileURL: downloadURL,
      });

      // Step 3: Add document details to Firestore, along with the download URL
      await addDoc(collection(db, "documents"), {
        name,          // Form field for name
        cost,          // Form field for cost
        subject,       // Form field for subject
        uploadDate,    // Form field for upload date
        fileName: file.name, // The uploaded file's name
        fileURL: downloadURL, // The URL of the uploaded file in Firebase Storage
      });

      // Alert user of successful upload
      alert("Document uploaded successfully!");

      // Reset the form after successful upload
      setName("");
      setCost("");
      setSubject("");
      setUploadDate("");
      setFile(null);
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Failed to upload document. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <h2>Upload Document</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Upload Date"
        value={uploadDate}
        onChange={(e) => setUploadDate(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
