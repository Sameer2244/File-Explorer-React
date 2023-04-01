import React, { useState } from 'react';
import './style.css';

import { folderData } from './folder_data/folderData';

export default function App() {
  const [treeset, setTreeset] = useState(folderData);
  return (
    <div>
      <Folder folderData={treeset} />
    </div>
  );
}
