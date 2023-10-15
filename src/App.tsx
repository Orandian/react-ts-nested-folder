import React from 'react';

const folders = {
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: 'bin',
          children: [
            {
              name: 'acorn',
            },
          ],
        },
      ],
    },
    {
      name: 'public',
      children: [
        {
          name: 'vite.svg',
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'assets',
          children: [
            {
              name: 'react.svg',
            },
          ],
        },
        {
          name: 'App.tsx',
        },
        {
          name: 'index.css',
        },
        {
          name: 'main.tsx',
        },
        {
          name: 'vite-env.d.ts',
        },
      ],
    },
    {
      name: '.eslintrc.cjs',
    },
    {
      name: '.gitignore',
    },
    {
      name: 'package-lock.json',
    },
    {
      name: 'README.md',
    },
    {
      name: 'tsconfig.json',
    },
    {
      name: 'tsconfig.node.json',
    },
    {
      name: 'vite.config.ts',
    },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div>
      {entry.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '-' : '+'} {entry.name}
        </button>
      ) : (
        <div className="normal">{entry.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div>
      {folders.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
