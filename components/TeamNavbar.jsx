import Link from "next/link";
import styles from "../pages/teams.module.css";

export default function TeamNavbar() {
  return (
    <div>
      <div className="row row-left" style={{padding: "0 1em"}}>
        <Link href="/teams/2020" passHref><button className={styles.yearButton}> 2019/2020 </button></Link>
        <Link href="/teams/2021" passHref><button className={styles.yearButton}> 2020/2021 </button></Link>
      </div>
      <hr/>
    </div>
  );
}
