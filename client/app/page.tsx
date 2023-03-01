import Image from "next/image";
import { Cairo } from "@next/font/google";
import styles from "./page.module.css";
import StatisticsList from "@/components/Statistics/StatisticsList";
import CustomSection from "@/components/CustomSection";
import LatestNotification from "@/components/LatestNotification/NotificationList";

const Home = () => {
  return (
      <main className="w-full">
        {/* Statistics section */}
        <CustomSection
          title="إحصائيات عامة"
          className="my-12 w-[100%] m-auto"
        >
          <StatisticsList />
        </CustomSection>

        {/* Latest Notification*/}
        <CustomSection
          title="آخر الإشعارات"
          className="my-12 w-[100%] m-auto"
        >
          <LatestNotification />
        </CustomSection>
      </main>
  );
};
export default Home;
