import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import fileSvg from '../../images/file.svg';
import remove from '../../images/remove.svg';
export default function Upload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const removeFile = () => {
    setUploadedFile(null);
    setFileError(null);
  };
  const MAX_FILE_SIZE_MB = 15;
  const { getRootProps, getInputProps, isDragActive, open: openFileDialog } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      setFileError(null);
    },
    onDropRejected: (rejectedFiles) => {
      setUploadedFile(null);
      setFileError('Upload Failed: Maximum file size of 1 MB reached');
    },
    accept: { 'image/*': [] },
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
    multiple: false,
    noClick: true,
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
      {!uploadedFile && fileError && (
        <p className='w-fit text-left ml-[5%] mt-1 px-2 py-1 bg-[#FFC8C0] text-[#FF0F0F] rounded max-w-[90%]'>
          Upload Failed: Maximum file size of 15 MB reached
        </p>
      )}
      {!fileError && uploadedFile && (
        <div className='w-fit bg-[#B59988] text-[#51210D] text-left ml-[5%] px-2 py-1 mt-1 rounded flex flex-row'>
          <img
            src={remove}
            alt="remove"
            className=''
          />
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
