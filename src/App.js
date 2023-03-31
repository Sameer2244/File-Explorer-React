import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [treemap, setTreemap] = useState([
    { folder1: [] },
    {
      folder2: [
        {
          folder1: [
            'file1',
            'file2',
            { folder1: [] },
            'file3',
            { folder2: [] },
          ],
        },
        { folder2: [] },
      ],
    },
    {
      folder3: [
        'file1',
        'file2',
        {
          folder1: [],
        },
      ],
    },
  ]);
  return (
    <div>
      <Folder folders={treemap} />
    </div>
  );
}

function Folder({ folders }) {
  if (folders.length === 0) {
    return null;
  }
  return (
    <>
      {Object.keys(folders).map((e) => {
        return (
          <div key={e}>
            {console.log(folders[e], typeof folders[e] === 'object')}
            {typeof folders[e] === 'object' ? (
              <Folder folders={folders[e]} />
            ) : (
              <h1>{folders[e]}</h1>
            )}
          </div>
        );
      })}
    </>
  );
}
