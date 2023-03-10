module.exports = {
  // types,
  types: [
    {
      value: 'feat',
      name: 'โจ A new feature',
    },
    {
      value: 'fix',
      name: '๐ A bug fix',
    },
    {
      value: 'docs',
      name: '๐ Documentation only changes',
    },
    {
      value: 'style',
      name: '๐ Updating the UI and style files.',
    },
    {
      value: 'test',
      name: '๐งช Adding or changing the tests.',
    },
    {
      value: 'refactor',
      name: '๐จ A code change that neither fixes a bug nor adds a feature.',
    },
    {
      value: 'chore',
      name: '๐ง Updating grunt tasks etc; no production code change.',
    },
    {
      value: 'perf',
      name: 'โก๏ธ Improving the performance.',
    },
    {
      value: 'build',
      name: '๐ฆ๏ธ Building stuff.',
    }
  ],

  scopes: [],

  scopeOverrides: {
    ':wrench: docs': [{ name: ':wrench: docs' }, { name: ':bulb: docs_code' }],
  },

  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  subjectLimit: 72,
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
};
