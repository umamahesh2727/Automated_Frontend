import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export default function ImageDropzone({ onImageSelect }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: files => files[0] && onImageSelect(files[0])
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-transform transform hover:scale-105
        ${isDragActive ? 'border-green-500 bg-indigo-100 shadow-lg' : 'border-gray-300 hover:border-green-400'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-16 w-16 text-green-500" />
      <p className="mt-4 text-lg font-medium text-gray-700">
        {isDragActive
          ? "Drop the image here"
          : "Drag 'n' drop a classroom image, or click to select"}
      </p>
    </div>
  );
}
