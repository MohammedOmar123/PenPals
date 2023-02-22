import Image from "next/image";
import { Cairo } from "@next/font/google";
import styles from "./page.module.css";
import StatisticsList from "@/components/Statistics/StatisticsList";
import CustomSection from "@/components/CustomSection";

const Home = () => {
  return (
    <main>
      {/* Statistics section */}
      <CustomSection title="إحصائيات عامة" className="my-12 px-8 w-[100%] m-auto">
        <StatisticsList />
      </CustomSection>
    </main>
  );
};
export default Home;
