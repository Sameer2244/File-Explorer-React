import React, { useState } from 'react';
import './style.css';

import { folderData } from './folder_data/folderData';
import Folder from './components/Folder';

import { useFolder } from './custom_hook/useFolder';

export default function App() {
  const [treeset, setTreeset] = useState(folderData);
  const { addnewItem } = useFolder();
  const addnewFolder = () => {
    setTreeset(addnewItem(treeset, 1, 'demo folder', true));
  };
  const addnewFile = () => {
    setTreeset(addnewItem(treeset, 1, 'demo file', false));
  };
  return (
    <div>
      <div className="folder">
        <p>📁{treeset.name} </p>
        <div className="btns">
          <button onClick={addnewFolder}>+Add folder</button>
          <button onClick={addnewFile}>+Add file</button>
        </div>
      </div>
      <Folder
        folderData={treeset.children}
        treeset={treeset}
        setTreeset={setTreeset}
      />
    </div>
  );
}
