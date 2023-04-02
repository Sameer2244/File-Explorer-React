import { v4 as uuidv4 } from 'uuid';
export const useFolder = () => {
  const addnewItem = (fulldata, targetid, foldername, isfolder) => {
    if (fulldata.length === 0) return null;
    if (fulldata.id === targetid) {
      fulldata.children.unshift({
        id: uuidv4(),
        name: foldername + uuidv4(),
        isfolder,
        children: [],
      });
      return { ...fulldata };
    }
    let finalarr = [];
    finalarr = fulldata.children.map((e) => {
      return addnewItem(e, targetid, foldername, isfolder);
    });
    return { ...fulldata, children: finalarr };
  };

  const deleteItem = (fulldata, targetid, foldername, isfolder) => {};
  const updateItem = (fulldata, targetid, foldername, isfolder) => {};

  return { addnewItem, deleteItem, updateItem };
};
