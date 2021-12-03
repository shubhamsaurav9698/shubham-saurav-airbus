export const Render = ({ when, children }) => {
  if (when) {
    return children;
  } else {
    return null;
  }
};
