import styles from './Google.module.css';
import InteractiveMap from '/Users/hayleyrobertson/Development/2022/mkt-guide/src/components/InteractiveMap.js';

const Google = () => {
  return (
    <>
      <div className="interactive-maps">
        <InteractiveMap
          className={styles.map1}
          src="https://www.google.com/maps/d/u/0/embed?mid=1Y4lAtOmQaFkmvu6loTXrsLv7Xs_QXyer&ehbc=2E312F"
          title="Filter By Type of Farm"
          >Filter By Farm Type</InteractiveMap>
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
