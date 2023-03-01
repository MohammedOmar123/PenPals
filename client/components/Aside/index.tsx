import { FC } from "react";
import { HomeIcon, UserGroupIcon, NewspaperIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const AsideButton: FC<any> = ({children, title, style}) => {
  return (<button value={title} className={`${style} w-full px-8 py-3 flex items-center gap-2`}>
    {children}
  </button>);
}

const Aside: FC = () => {
  return (
    <aside className="flex flex-col justify-between py-8 w-[15%] shrink-0">
      <div className="flex flex-col w-full">
        <AsideButton title="main" style="shadow-inner">
          <HomeIcon className="text-black w-[24px] h-[24px]" />
          <label>الرئيسية</label>
        </AsideButton>
        <AsideButton title="users">
          <UserGroupIcon className="text-black w-[24px] h-[24px]" />
          <label>إدارة المستخدمين</label>
        </AsideButton>
        <AsideButton title="books">
          <NewspaperIcon className="text-black w-[24px] h-[24px]" />
          <label>إدارة الكتابات</label>
        </AsideButton>
        <AsideButton title="settings">
          <Cog6ToothIcon className="text-black w-[24px] h-[24px]" />
          <label>الإعدادات</label>
        </AsideButton>
      </div>
      <button value="logout" className="px-8 py-3 flex items-center gap-2">
        <ArrowRightOnRectangleIcon className="text-black w-[24px] h-[24px]" />
        <label>تسجيل الخروج</label>
      </button>
    </aside>
  );
}

export default Aside;