import React, { useState } from 'react';
import './style.css';

export default function Test() {
  const [treemap, setTreemap] = useState([
    { folder1: [] },
    {
      folder2: [
        {
          folder21: [
            'file1',
            'file2',
            { folder211: [] },
            'file3',
            { folder212: [] },
          ],
        },
        { folder22: [] },
      ],
    },
    {
      folder3: [
        'file1',
        'file2',
        {
          folder31: [],
        },
      ],
    },
  ]);
  return (
    <div>
      {Object.keys(treemap).map((e) => {
        return (
          <div>
            <Folder
              folders={treemap[e]}
              setTreemap={setTreemap}
              treemap={treemap}
            />
          </div>
        );
      })}
    </div>
  );
}

function Folder({ folders, setTreemap, treemap }) {
  if (folders.length === 0) {
    return null;
  }

  const rotate = (arr, keytofind) => {
    if (arr.length === 0) return null;
    Object.keys(arr).map((e) => {
      if (`folder${e}` === keytofind) console.log('found', arr[e]);
    });
  };

  const addFile = (keytofind) => {
    Object.keys(treemap).map((e) => {
      rotate(e, keytofind);
    });
  };
  return (
    <>
      {Object.keys(folders).map((e) => {
        return (
          <div key={e} style={{ border: '1px solid black', margin: '1rem' }}>
            {typeof folders[e] === 'object' ? (
              <div>
                <button
                  onClick={() => {
                    addFile(e);
                  }}
                >
                  Add file
                </button>
                <h3>{e}</h3>
                <Folder folders={folders[e]} />
              </div>
            ) : (
              <h4>{folders[e]}</h4>
            )}
          </div>
        );
      })}
    </>
  );
}
