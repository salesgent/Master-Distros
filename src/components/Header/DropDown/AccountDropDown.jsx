import Link from "next/link";
import {
  BsPerson,
  BsFileEarmarkRuled,
  BsArrowCounterclockwise,
} from "react-icons/bs";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { AiOutlineKey, AiOutlineLock } from "react-icons/ai";
////////
import styles from "./drop.module.scss";

////////////drop down
const AccountDropDown = () => {
  return (
    <div className={styles.levelContainer}>
      <span className={styles.notch}></span>
      <Link href="/account">
        <a className={styles.secLink}>
          <BsPerson className={styles.icon} />
          Dashboard
        </a>
      </Link>
      <Link href="#">
        <a className={styles.secLink}>
          <BsFileEarmarkRuled className={styles.icon} />
          statement
        </a>
      </Link>
      {/* <Link href="#">
        <a className={styles.secLink}>
          <BsArrowCounterclockwise className={styles.icon} />
          Returns/RMAs
        </a>
      </Link>
      <Link href="#">
        <a className={styles.secLink}>
          <MdOutlineScreenSearchDesktop className={styles.icon} />
          LCD by Back
        </a>
      </Link> */}
      <Link href="/account/forgotPassword">
        <a className={styles.secLink}>
          <AiOutlineKey className={styles.icon} />
          change Password
        </a>
      </Link>
      <Link href="/">
        <a
          onClick={() => {
            localStorage.clear();
            setTimeout(() => {
              window.location.reload();
            }, 600);
          }}
          className={styles.secLink}
        >
          <AiOutlineLock className={styles.icon} /> Logout
        </a>
      </Link>
    </div>
  );
};

export default AccountDropDown;
