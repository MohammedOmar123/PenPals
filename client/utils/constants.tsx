import { IStatisticsItem } from "@/interfaces/other/IStatisticsItem";
import { INotificationsItem } from "@/interfaces/other/INotificationsItem";

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


export const notifications: INotificationsItem[] = [
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "read",
    postId: 1,
    type:"create"
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "unread",
    postId: 3,
    type:"update"
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "read",
    postId: 3,
    type:"create"
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "unread",
    postId: 3,
    type:"update"
  }
];