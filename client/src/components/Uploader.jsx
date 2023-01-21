import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { FileArrowUp } from "phosphor-react";

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free"
});

// Customize the file upload UI (see "customization"):
const options = { multi: true }

// Render the file upload button:
export const UploaderButton = () =>
  <UploadButton uploader={uploader}         // Required.
                options={options}           // Optional.
                onComplete={files => {      // Optional.
                  if (files.length === 0) {
                    console.log('No files selected.')
                  } else {
                    console.log('Files uploaded:');
                    console.log(files.map(f => f.fileUrl));
                  }
                }}>
    {({onClick}) =>
      <button onClick={onClick} className='text-blue-500 flex flex-col items-center'>
        <FileArrowUp size={32} weight="duotone" className='bg-blue-100 rounded-[50%] p-1' />
        Clique para fazer upload...
      </button>
    }
  </UploadButton>