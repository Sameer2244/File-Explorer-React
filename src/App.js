import React, { useState } from 'react';
import './style.css';

import { folderData } from './folder_data/folderData';
import Folder from './components/Folder';

export default function App() {
  const [treeset, setTreeset] = useState(folderData);
  return (
    <div>
      <p className="folder">📁{treeset.name}</p>
      <Folder folderData={treeset.children} />
    </div>
  );
}
