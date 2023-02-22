import { IStatisticsItem } from "@/interfaces/IStatisticsItem";

export const icons = {
  user: "/icons/user.svg",
  competition: "/icons/competition.svg",
  post: "/icons/post.svg",
  student: "/icons/student.svg",
};

export const statistics: IStatisticsItem[] = [
  {
    label: "طالبة",
    title: "student",
    value: 998,
  },
  {
    label: "مستخدم",
    title: "user",
    value: 3000,
  },
  {
    label: "مسابقة",
    title: "competition",
    value: 5,
  },

  {
    label: "منشور",
    title: "post",
    value: 998,
  },
];
