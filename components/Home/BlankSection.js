import Section from '../Section'

export default () => (
  <Section
    // backgroundColor='#f1f1f1'
    >
      <div className="blank-section">
      </div>
    <style jsx>{`
      .blank-section {
        width: 100%;
        height: 50vh;
        margin: 0;
        border: 0;
        display: flex;
        padding: 0;
        overflow: hidden;
        position: relative;
        // align-items: center;
      }
      `}</style>
  </Section>
);
