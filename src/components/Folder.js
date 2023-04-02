import React from 'react';

import { useFolder } from '../custom_hook/useFolder';
export default function Folder({ folderData, treeset, setTreeset }) {
  if (folderData.length === 0) return null;
  const { addnewItem } = useFolder();
  const addnewFolder = (id, isfolder) => {
    setTreeset(addnewItem(treeset, id, 'demo folder', isfolder));
  };
  const addnewFile = (id, isfolder) => {
    setTreeset(addnewItem(treeset, id, 'demo file', isfolder));
  };
  return (
    <div>
      {folderData.map((e) => {
        return (
          <div key={e.id} className="container">
            {e.isfolder ? (
              <div className="folder">
                <p>📁{e.name}</p>
                <div className="btns">
                  <button
                    onClick={() => {
                      addnewFolder(e.id, true);
                    }}
                  >
                    +Add folder
                  </button>
                  <button
                    onClick={() => {
                      addnewFile(e.id, false);
                    }}
                  >
                    +Add file
                  </button>
                </div>
              </div>
            ) : (
              <p className="file">🗄️{e.name}</p>
            )}
            <Folder
              folderData={e.children}
              treeset={treeset}
              setTreeset={setTreeset}
            />
          </div>
        );
      })}
    </div>
  );
}
