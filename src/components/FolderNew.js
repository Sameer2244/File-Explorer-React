import React, { useState } from 'react';
import '../style.css';

export default function FolderNew({ treeset, addItem }) {
  if (treeset.isfolder) {
    return (
      <div className="folder">
        <div>{treeset.name}</div>
        {treeset.children.map((e) => {
          return <Folder addItem={addItem} key={exp.id} treeset={e} />;
        })}
      </div>
    );
  } else {
    return <div className="file">{treeset.name}</div>;
  }
}
