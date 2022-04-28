const InteractiveMap = ( props ) => {
  return (
      <div className={props.title}>
        <h3>{props.title}</h3>
        <iframe 
        src={props.src} 
        width="600" 
        height="450"
        frameBorder="0"
        style={{border:0}}
        allowFullScreen=""
        aria-hidden="false"
        />
      </div>
  );
};

export default InteractiveMap;