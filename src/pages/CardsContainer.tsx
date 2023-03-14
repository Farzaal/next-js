import { FunctionComponent, useCallback } from "react";
import styles from "./CardsContainer.module.css";

const CardsContainer: FunctionComponent = () => {
  const onCol4Click = useCallback(() => {
    window.open("https://www.bing.com/");
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/parisimage@2x.png"
          />
          <div className={styles.destinationDetails}>
            <b className={styles.parsaQwerty}>
              <p className={styles.blankLine}>Parsa-Qwerty</p>
              <p className={styles.blankLine}>&nbsp;</p>
            </b>
            <div className={styles.details}>
              <div className={styles.div}>$699</div>
              <div className={styles.from}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/greeceimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <b className={styles.parsaQwerty}>Greece-Golang</b>
            <div className={styles.details1}>
              <div className={styles.div1}>$1079</div>
              <div className={styles.from1}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col1}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/norwayimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <b className={styles.parsaQwerty}>Norway-ER</b>
            <div className={styles.details2}>
              <div className={styles.div2}>$895</div>
              <div className={styles.from2}>from</div>
            </div>
          </div>
        </div>
      </button>
      <button className={styles.col1} onClick={onCol4Click}>
        <div className={styles.pariscard}>
          <img
            className={styles.parisimageIcon}
            alt=""
            src="/tuscanyimage@2x.png"
          />
          <div className={styles.destinationDetails1}>
            <b className={styles.parsaQwerty}>Tuscany-V2</b>
            <div className={styles.details3}>
              <div className={styles.div3}>$1245</div>
              <div className={styles.from3}>from</div>
            </div>
          </div>
        </div>
      </button>
      <div className={styles.redBoatboxParent}>
        <b className={styles.redBoatbox}>Red BoatBox</b>
        <img
          className={styles.pearl72Yacht1Icon}
          alt=""
          src="/2023pearl72yacht-1@2x.png"
        />
        <b className={styles.boatPictures}>Boat Pictures</b>
      </div>
      <div className={styles.blueWrapper}>
        <b className={styles.blue}>Blue</b>
      </div>
    </div>
  );
};

export default CardsContainer;
