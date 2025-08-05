import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { predictImage } from '../../api.ts'; 
import fileSvg from '../../images/file.svg';
import remove from '../../images/remove.svg';


export default function Upload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const navigate = useNavigate();

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

  const handleSubmit = async () => {
    console.log("handleSubmit ran");
    if (!uploadedFile) return;
    console.log("uploadedFile is true");
    try {
      console.log("here 1")
      const imageURL = URL.createObjectURL(uploadedFile);
      const result = await predictImage(uploadedFile);
      navigate('/results', {
        state: {
          imagePath: imageURL,
          imageName: uploadedFile.name,
          confidence: result.confidence,
        },
      });
      
      // navigate(`/results?prediction=${result.prediction}&confidence=${result.confidence}`);
      console.log("Prediction result: ", result.prediction);
    } catch (error) {
      console.log("here 1")
      setFileError('Prediction failed. Try again.');
    }
  };

  return (
    <div className="mb-3 bg-[#F5F5F5] border-2 border-solid border-[#B59988] rounded-xl  mx-auto w-[60%] h-[60%] md:w-[60%] md:h-[55vh]">
      <p className='font-gantari text-main-brown pl-[5%] pt-[2%]'>Upload Image</p>
      <div
      className={`border-2 border-dashed border-[#51210D] rounded-xl mx-auto w-[90%] h-[60%] p-4 flex items-center justify-center ${
        isDragActive ? 'bg-[#E0DEDB]' : 'bg-[#F0EFED]'
      }`}
      >
        <div className='w-1/2 md:w-auto mx-auto text-center' {...getRootProps()}>
          <input {...getInputProps()} />
          <img
            src={fileSvg}
            alt="file.svg"
            className=' mx-auto h-10 w-10 md:h-20 md:w-20'
          />
          <div className='flex justify-center mt-2'>
            <div className='flex flex-row items-center'>
              <button
                type="button"
                onClick={openFileDialog}
                className={`bg-[#E06929] rounded-[15px] px-2 py-[2px] ${
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
      <div className="flex flex-col">
        {!uploadedFile && fileError && (
          <p className='w-fit text-left ml-[5%] mt-1 px-2 py-1 bg-[#FFC8C0] text-[#FF0F0F] rounded max-w-[90%]'>
            Upload Failed: Maximum file size of 15 MB reached
          </p>
        )}
        {!fileError && uploadedFile && (
          <div className='w-fit bg-[#B59988] text-[#51210D] text-left ml-[5%] px-2 py-1 mt-1 rounded flex flex-row'>
            <img src={remove} alt="remove" />
            <button onClick={removeFile}>{uploadedFile.name}</button>
          </div>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className={`rounded-[15px] w-fit px-3 py-[2px] self-end left-0 mr-[5%] mt-4 my-2 md:mt-10 ${
            (!fileError && uploadedFile) ? 'bg-[#E06929] text-[#F0EFED]' : 'bg-[#B9B9B9] text-[#DFDFDF]'
          }`}
        >
          Submit
        </button>
      </div>
    </div>
    
  );
}
