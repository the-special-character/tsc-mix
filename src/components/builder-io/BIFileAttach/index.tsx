import React, { useRef, useState } from "react";
import PaperclipIcon from "@/public/icons/paperclip-icon.svg";
import { useController, useForm } from "react-hook-form";
import { Cross2Icon } from "@radix-ui/react-icons";

interface CustomFileUploadProps {
  name: string;
  fileText: string;
  fileSize: number;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  name,
  fileText,
  fileSize,
  // onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { control } = useForm();

  const {
    field: { onChange },
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []); // Get all selected files
    const totalSize = files.reduce((acc, file) => acc + file.size, 0); // Calculate total size

    if (totalSize > fileSize * 1024 * 1024) {
      setError(`Total file size exceeds ${fileSize} MB limit`);
      event.target.value = "";
    } else {
      setError(null);
      setUploadedFiles(files);
      onChange(files);
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFiles = uploadedFiles.filter((file) => file !== fileToRemove);
    setUploadedFiles(updatedFiles);
    onChange(updatedFiles);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <input
        type="file"
        name={name}
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <label
        htmlFor="file-upload"
        className="flex w-max py-2 gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <PaperclipIcon width={25} height={25} className="mt-2 " />
        <div className="flex flex-col">
          {fileText && (
            <span className="text-caption1 font-medium text-white">
              {fileText}
            </span>
          )}
          {fileSize && (
            <span className="text-caption2 text-[#a1a1a1]">{`up to ${fileSize} MB`}</span>
          )}
        </div>
      </label>
      <div className="mt-2">
        {uploadedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {uploadedFiles &&
              uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-2 rounded-sm relative"
                >
                  <span className="text-sm">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file)}
                    className="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-red-400 hover:text-red-600 bg-[#a1a1a1] rounded-full"
                  >
                    <Cross2Icon width={15} height={15} />
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomFileUpload;
