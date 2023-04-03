export const folderData = {
  id: 1,
  name: 'user',
  isfolder: true,
  children: [
    {
      id: 2,
      name: 'public',
      isfolder: true,
      children: [
        {
          id: 3,
          name: 'public nested 1',
          isfolder: true,
          children: [
            {
              id: 4,
              name: 'index.html',
              isfolder: false,
              children: [],
            },
            {
              id: 5,
              name: 'hello.html',
              isfolder: false,
              children: [],
            },
          ],
        },
        {
          id: 6,
          name: 'public_nested_file',
          isfolder: false,
          children: [],
        },
      ],
    },
    {
      id: 7,
      name: 'src',
      isfolder: true,
      children: [
        {
          id: 8,
          name: 'App.js',
          isfolder: false,
          children: [],
        },
        {
          id: 9,
          name: 'Index.js',
          isfolder: false,
          children: [],
        },
        {
          id: 10,
          name: 'styles.css',
          isfolder: false,
          children: [],
        },
      ],
    },
    {
      id: 11,
      name: 'package.json',
      isfolder: false,
      children: [],
    },
  ],
};
