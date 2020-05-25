import React from 'react';

export default () => {
  const [file, setFile] = React.useState(null);
  const inputFileRef = React.useRef(null);
  return (
    <div>
      <input ref={inputFileRef} type="file" style={{ display: 'none' }} />

      <button onClick={() => inputFileRef.current.click()} id="upLoadFile">
        Escoger un archivo
      </button>
    </div>
  );
};
