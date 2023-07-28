module.exports = {
  root: true,
  extends: ['cnp'],
  overrides: [
    {
      files: '*.ts',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
};
