export const folderData = {
  id: 1,
  name: 'user',
  isfolder: true,
  children: [
    {
      id: 2,
      name: 'documents',
      isfolder: true,
      children: [
        {
          id: 3,
          name: 'file1.js',
          isfolder: false,
          children: [],
        },
        {
          id: 4,
          name: 'new folder',
          isfolder: true,
          children: [
            {
              id: 5,
              name: 'file2.js',
              isfolder: false,
              children: [],
            },
            {
              id: 6,
              name: 'file3.js',
              isfolder: false,
              children: [],
            },
          ],
        },
        {
          id: 8,
          name: 'new folder2',
          isfolder: true,
          children: [
            {
              id: 9,
              name: 'file4.js',
              isfolder: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'downloads',
      isfolder: true,
      children: [],
    },
  ],
};
