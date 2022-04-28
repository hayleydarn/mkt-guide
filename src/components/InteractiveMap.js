import style from './InteractiveMap.module.css';

const InteractiveMap = ( props ) => {
  return (
      <div className={props.title}>
        <h3 className={style.heading}>{props.title}</h3>
        <h5 className={style.subheading}>click on a location to learn more</h5>
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