export default props => {
  const { className, children, backgroundImage, backgroundColor, color } = props;

  return <section className={className}>
    {children}
    <style jsx>{`
      section {
        padding: 60px 0px 60px;
        width: 100%;
        margin: 0;
        border: 0;
        display: flex;
        // padding: 0;
        overflow: hidden;
        position: relative;
        align-items: center;
        color: ${color || 'inherit'};
        ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
        ${backgroundImage ? `
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center center;
          ` : ''}
      }
      `}</style>
  </section>
};
