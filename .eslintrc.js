module.exports = {
  extends: ['react-app'],
  rules: {
    // 0 忽略 ，1 警告， 2 报错
    'react/jsx-uses-react': [2],
    // 提示要在 JSX 文件里手动引入 React
    'react/react-in-jsx-scope': [2]
  }
}