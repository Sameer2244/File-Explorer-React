export const folderData = {
  id: 1,
  name: 'user',
  isfolder: true,
  childern: [
    {
      id: 2,
      name: 'documents',
      isfolder: true,
      childern: [
        {
          id: 3,
          name: 'file1.js',
          isfolder: false,
          childern: [],
        },
        {
          id: 4,
          name: 'new folder',
          isfolder: true,
          childern: [
            {
              id: 5,
              name: 'file2.js',
              isfolder: false,
              childern: [],
            },
            {
              id: 6,
              name: 'file3.js',
              isfolder: false,
              childern: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'downloads',
      isfolder: true,
      childern: [],
    },
  ],
};
