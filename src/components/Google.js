import styles from './Google.module.css';
import InteractiveMap from './InteractiveMap';

const Google = () => {
  return (
    <>
      <div className="interactive-maps">
        <InteractiveMap
          className={styles.map1}
          src="https://www.google.com/maps/d/u/0/embed?mid=1Y4lAtOmQaFkmvu6loTXrsLv7Xs_QXyer&ehbc=2E312F"
          title="Filter By Type of Farm"
          >
            Filter By Farm Type: click on a location to learn more
          </InteractiveMap>
        <InteractiveMap
          className={styles.map2}
          src="https://www.google.com/maps/d/u/0/embed?mid=17yX5Li1xS0TttUpdPPQ689NqWKpn-z4L&ehbc=2E312F"
          title="Filter By Days Open"
        />
      </div>
    </>
  );
};

export default Google;
