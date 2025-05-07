import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import fileSvg from '../../images/file.svg';
export default function Upload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const removeFile = () => {
    setUploadedFile(null);
  };
  const { getRootProps, getInputProps, isDragActive, open: openFileDialog } = useDropzone({
    onDrop: (files) => setUploadedFile(files[0]),
    accept: { 'image/*': [] },
    multiple: false,
    noClick: true
  });

  return (
    <div>
      <div
      className={`border-2 border-dashed border-[#51210D] rounded-xl mx-auto w-[90%] h-[50%] p-4 flex items-center justify-center ${
        isDragActive ? 'bg-[#E0DEDB]' : 'bg-[#F0EFED]'
      }`}
      >
        <div className='w-1/2 md:w-auto mx-auto text-center' {...getRootProps()}>
          <input {...getInputProps()} />
          <img
            src={fileSvg}
            alt="file.svg"
            className='w-[50px] md:w-auto h-auto mx-auto'
          />
          <div className='flex justify-center mt-2'>
            <div className='flex flex-row items-center'>
              <button
                type="button"
                onClick={openFileDialog}
                className={`bg-[#E06929] rounded-xl px-2 py-1 ${
                  isDragActive ? 'text-[#E0DEDB]' : 'text-[#F0EFED]'
                }`}
              >
                Upload
              </button>
              <p className='pl-1 hidden md:inline'>or Drag and Drop</p>
            </div>
          </div>
        </div>
      </div>
      {uploadedFile && (
        <div className='text-center'>
          <button
            onClick={removeFile}
            className=''
          >
            {uploadedFile.name}
          </button>
        </div>
      )}
    </div>
  );
}
