// import React, { useState } from 'react';
// import ImageDropzone from '../components/ImageDropzone'; // Import your ImageDropzone component

// export default function Upload() {
//   const [uploading, setUploading] = useState(false);
//   const [studentCount, setStudentCount] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleImageSelect = async (file) => {
//     setUploading(true);
//     setUploadedImage(URL.createObjectURL(file)); // Display the uploaded image

//     const formData = new FormData();
//     formData.append('image', file);

//     try {
//       // Call the backend to get the student count
//       const response = await fetch('http://127.0.0.1:5000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch prediction');
//       }

//       const data = await response.json();
//       const count = Math.round(data.student_count); // Extract student count

//       // Update state with the count
//       setStudentCount(count);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error processing image. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="text-center mb-12 mt-12">
//         <h1 className="text-4xl font-bold text-gray-900 my-6">
//           Count Students with AI
//         </h1>
//         <p className="text-xl text-gray-600">
//           Upload a classroom image and let our AI count the students for you.
//         </p>
//       </div>

//       {/* Image Upload Dropzone */}
//       <ImageDropzone onImageSelect={handleImageSelect} />

//       {/* Loading Spinner */}
//       {uploading && (
//         <div className="mt-8 text-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto"></div>
//           <p className="mt-2 text-gray-600">Processing image...</p>
//         </div>
//       )}

//       {/* Uploaded Image and Student Count Display */}
//       {uploadedImage && (
//         <div className="mt-8 text-center">
//           <img
//             src={uploadedImage}
//             alt="Uploaded"
//             className="mx-auto w-128 h-128 object-cover rounded-lg shadow-lg mb-4"
//           />
//           {studentCount !== null && (
//             <p className="text-3xl font-semibold text-gray-800">
//               Estimated Student Count: {studentCount}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }












import React, { useState } from 'react';
import ImageDropzone from '../components/ImageDropzone'; // Import your ImageDropzone component

export default function Upload() {
  const [uploading, setUploading] = useState(false);
  const [studentCount, setStudentCount] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageSelect = async (file) => {
    setUploading(true);
    setUploadedImage(URL.createObjectURL(file)); // Display the uploaded image

    const formData = new FormData();
    formData.append('image', file);

    try {
      // Call the backend to get the student count
      const response = await fetch('http://127.0.0.1:5001/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }

      const data = await response.json();
      const count = Math.round(data.student_count); // Extract student count

      // Update state with the count
      setStudentCount(count);
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-900 my-6">
          Count Students with AI
        </h1>
        <p className="text-xl text-gray-600">
          Upload a classroom image and let our AI count the students for you.
        </p>
      </div>

      {/* Image Upload Dropzone */}
      <ImageDropzone onImageSelect={handleImageSelect} />

      {/* Loading Spinner */}
      {uploading && (
        <div className="mt-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Processing image...</p>
        </div>
      )}

      {/* Image Preview Space */}
      {!uploadedImage && (
        <div
          className="my-8 text-center border-dashed border-4 border-gray-500 w-128 h-128 mx-auto rounded-lg flex items-center justify-center"
          style={{ minHeight: '200px' }}
        >
          <p className="text-gray-600">No image selected yet</p>
        </div>
      )}

      {/* Uploaded Image and Student Count Display */}
      {uploadedImage && (
        <div className="mt-8 text-center">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="mx-auto w-128 h-128 object-cover rounded-lg shadow-lg mb-4"
          />
          {studentCount !== null && (
            <p className="text-3xl font-semibold text-gray-800">
              Estimated Student Count: {studentCount}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
