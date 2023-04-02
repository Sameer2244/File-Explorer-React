import React, { useState } from 'react';
import './style.css';

import { folderData } from './folder_data/folderData';
import Folder from './components/Folder';

import { useFolder } from './custom_hook/useFolder';

export default function App() {
  const [treeset, setTreeset] = useState(folderData);
  const { addnewItem, updateItem, deleteItem } = useFolder();
  const operationType = React.useRef('new');
  const [minput, setInput] = useState({
    value: '',
    show: false,
    placeholder: '',
  });
  const addItem = (id, name, isfolder) => {
    setTreeset(addnewItem(treeset, id, name, isfolder));
  };

  const rename = (id, name) => {
    setTreeset(updateItem(treeset, id, name));
  };
  const delete_item = (id) => {
    setTreeset(deleteItem(treeset, id));
  };

  return (
    <div>
      <h4 style={{ color: 'red' }}>
        Bug is available: opening one of the children's input will open all
        children's input (yet to be solved)
      </h4>
      <div className="folder">
        <p>📁{treeset.name} </p>
        <div className="btns">
          {minput.show && (
            <input
              placeholder={minput.placeholder}
              onKeyDown={(el) => {
                if (el.keyCode === 13 && el.target.value) {
                  if (operationType.current === 'new') {
                    minput.placeholder.toString().includes('folder')
                      ? addItem(treeset.id, minput.value, true)
                      : addItem(treeset.id, minput.value, false);
                  } else if (operationType.current === 'update') {
                    rename(treeset.id, minput.value);
                  }
                  setInput({ show: false, value: '', placeholder: '' });
                }
              }}
              value={minput.value}
              onChange={(e) => setInput({ ...minput, value: e.target.value })}
            />
          )}
          <button
            onClick={() => {
              setInput({
                ...minput,
                show: true,
                placeholder: 'enter folder name',
              });
              operationType.current = 'new';
              // addnewFolder(e.id, true);
            }}
          >
            +Add folder
          </button>
          <button
            onClick={() => {
              setInput({
                ...minput,
                show: true,
                placeholder: 'enter file name',
              });
              operationType.current = 'new';
            }}
          >
            +Add file
          </button>

          <button
            onClick={() => {
              setInput({
                ...minput,
                show: true,
                placeholder: 'enter new name',
              });
              operationType.current = 'update';
            }}
          >
            Rename
          </button>

          <button
            onClick={() => {
              delete_item(treeset.id);
            }}
          >
            Delete
          </button>
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
