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
        { folder1: [] },
      ],
    },
    { folder3: [] },
  ]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
