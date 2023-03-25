import { FC } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Button from "../Button";

const Aside: FC = () => {
  return (
    <aside className="flex flex-row justify-between shrink-0 z-10 fixed bottom-0 left-0 w-full bg-white dark:bg-secondary-dark md:flex-col md:bg-inherit md:dark:bg-inherit md:relative md:w-[15%]">
      <div className="flex flex-row w-full justify-between md:flex-col md:justify-start">
        <Button className="bg-primary w-full px-4 py-4 flex items-center gap-2 rounded-full md:px-8 md:py-3 md:rounded-none">
          <HomeIcon className="text-secondary-light w-[24px] h-[24px]" />
          <label className="text-secondary-light hidden md:block">
            الرئيسية
          </label>
        </Button>
        <Button className="w-full px-4 py-4 flex items-center gap-2 rounded-none md:px-8 md:py-3 md:rounded-none">
          <UserGroupIcon className="text-primary w-[24px] h-[24px]" />
          <label className="text-primary hidden md:block">
            إدارة المستخدمين
          </label>
        </Button>
        <Button className="w-full px-4 py-4 flex items-center gap-2 rounded-none md:px-8 md:py-3 md:rounded-none">
          <NewspaperIcon className="text-primary w-[24px] h-[24px]" />
          <label className="text-primary hidden md:block">إدارة الكتابات</label>
        </Button>
        <Button className="w-full px-4 py-4 flex items-center gap-2 rounded-none md:px-8 md:py-3 md:rounded-none">
          <Cog6ToothIcon className="text-primary w-[24px] h-[24px]" />
          <label className="text-primary hidden md:block">الإعدادات</label>
        </Button>
      </div>
      <Button className="w-full px-4 py-4 flex items-center gap-2 rounded-none md:px-8 md:py-3 md:rounded-none">
        <ArrowRightOnRectangleIcon className="text-danger w-[24px] h-[24px]" />
        <label className="text-danger hidden md:block">تسجيل الخروج</label>
      </Button>
    </aside>
  );
};

export default Aside;
