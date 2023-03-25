import StatisticsList from "@/components/Statistics/StatisticsList";
import CustomSection from "@/components/CustomSection";
import LatestNotification from "@/components/LatestNotification/NotificationList";

const Home = () => {
  return (
    <article className="w-full flex flex-col gap-6">
      {/* Statistics section */}
      <CustomSection title="إحصائيات عامة" className="w-[100%] m-auto">
        <StatisticsList />
      </CustomSection>

      {/* Latest Notification*/}
      <CustomSection title="آخر الإشعارات" className="w-[100%] m-auto">
        <LatestNotification />
      </CustomSection>
    </article>
  );
};
export default Home;
