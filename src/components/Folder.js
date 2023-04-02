import React from 'react';

export default function Folder({ folderData }) {
  if (folderData.length === 0) return null;
  return (
    <div>
      {folderData.map((e) => {
        return (
          <div key={e.id} className="container">
            {e.isfolder ? (
              <p className="folder">📁{e.name}</p>
            ) : (
              <p className="file">🗄️{e.name}</p>
            )}
            <Folder folderData={e.children} />
          </div>
        );
      })}
    </div>
  );
}
