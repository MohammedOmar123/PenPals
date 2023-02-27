import Image from "next/image";
import { Cairo } from "@next/font/google";
import styles from "./page.module.css";
import StatisticsList from "@/components/Statistics/StatisticsList";
import CustomSection from "@/components/CustomSection";
import LatestNotification from "@/components/LatestNotification/NotificationList";
import UserInfo from "@/components/UserInfo";

const Home = () => {
  return (
    <main>
      {/* Statistics section */}
      <CustomSection title="إحصائيات عامة" className="my-12 px-8 w-[100%] m-auto">
        <StatisticsList />
      </CustomSection>

      {/* Latest Notification*/}
      <CustomSection title="آخر الإشعارات" className="my-12 px-8 w-[100%] m-auto">
        <LatestNotification />
      </CustomSection>

          {/* UserInfo just for test*/}
      <UserInfo image="/images/userImg.png" username="سارة" imgClassName="w-14 h-14"/>
    </main>
  );
};
export default Home;
