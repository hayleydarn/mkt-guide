const InteractiveMap = (props) => {
  return(
    <main>
      <div className='interactive-maps'>
        <div className="interactive-map">
          <iframe 
          src={props.src} 
          width="600" 
          height="450"
          frameborder="0"
          style={{border:0}}
          allowfullscreen=""
          aria-hidden="false"
          />
        </div>
      </div>

    </main>
  );
};

export default InteractiveMap