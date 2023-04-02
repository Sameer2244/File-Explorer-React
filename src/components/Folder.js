import React, { useState } from 'react';

import { useFolder } from '../custom_hook/useFolder';
export default function Folder({ folderData, treeset, setTreeset }) {
  const [minput, setInput] = useState({
    value: '',
    show: false,
    placeholder: '',
  });
  const operationType = React.useRef('new');
  if (folderData && folderData.length === 0) return null;
  const { addnewItem, updateItem, deleteItem } = useFolder();
  const addItem = (id, name, isfolder) => {
    setTreeset(addnewItem(treeset, id, name, isfolder));
  };
  const openInput = () => {
    setInput((e) => {
      return {
        ...e,
        show: true,
        placeholder: 'enter folder name',
      };
    });
    operationType.current = 'new';
  };

  const rename = (id, name) => {
    setTreeset(updateItem(treeset, id, name));
  };
  const delete_item = (id) => {
    setTreeset(deleteItem(treeset, id));
  };
  return (
    <div>
      {folderData &&
        folderData.map((e) => {
          return (
            <div key={e.id} className="container">
              {e.isfolder ? (
                <div className="folder">
                  <p>📁{e.name}</p>
                  <div className="btns">
                    {minput.show && (
                      <input
                        placeholder={minput.placeholder}
                        onKeyDown={(el) => {
                          if (el.keyCode === 13 && el.target.value) {
                            if (operationType.current === 'new') {
                              minput.placeholder.toString().includes('folder')
                                ? addItem(e.id, minput.value, true)
                                : addItem(e.id, minput.value, false);
                            } else if (operationType.current === 'update') {
                              rename(e.id, minput.value);
                            }
                            setInput({
                              show: false,
                              value: '',
                              placeholder: '',
                            });
                          }
                        }}
                        value={minput.value}
                        onChange={(e) =>
                          setInput({ ...minput, value: e.target.value })
                        }
                      />
                    )}
                    <button onClick={openInput}>+Add folder</button>
                    <button
                      onClick={(e) => {
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
                        delete_item(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                ''
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
