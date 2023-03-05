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

export const arabicRegister = {
  firstName: "الاسم الأول",
  lastName: "الاسم الأخير",
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
  confirmPassword: "تأكيد كلمة المرور",
  register: "تسجيل حساب",
  login: "تسجيل الدخول",
  alreadyHaveAccount: "لديك حساب بالفعل؟",
  newAccount: "تسجيل حساب جديد",
  validationMessages: {
    requiredFirstName: "الرجاء إدخال الاسم الأول",
    requiredLastName: "الرجاء إدخال الاسم الأخير",
    requiredEmail: "الرجاء إدخال البريد الإلكتروني",
    requiredPassword: "الرجاء إدخال كلمة المرور",
    requiredConfirmPassword: "الرجاء إدخال تأكيد كلمة المرور",
    invalidEmail: "البريد الإلكتروني غير صحيح",
    invalidPassword: "كلمة المرور غير صحيحة",
    invalidConfirmPassword: "تأكيد كلمة المرور غير صحيح",
    passwordNotMatch: "كلمة المرور غير متطابقة",
    minLengthPassword: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل",
  },
};
export const arabicSignin = {
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
  login: "تسجيل الدخول",
  forgotPassword: "نسيت كلمة المرور؟",
  newAccount: "تسجيل حساب جديد",
  notHaveAccount: " ليس لديك حساب بالفعل؟",
  validationMessages: {
    requiredEmail: "الرجاء إدخال البريد الإلكتروني",
    requiredPassword: "الرجاء إدخال كلمة المرور",
    invalidEmail: "البريد الإلكتروني غير صحيح",
    invalidPassword: "كلمة المرور غير صحيحة",
  },
};
export const arabicSignout= {
  signout: 'تسجيل خروج',
  title: "هل أنت متأكد؟",
  message: "هل تريد بالتأكيد تسجيل الخروج؟",
  yes: "نعم",
  no: "لا",
  

}
export const arabicWaitVerified = {
  title: "رسالة التحقق",
  message:
    "نحن الان في انتظار أن تنقر على رابط التأكيد الذي قمنا بإرساله لك على بريدك الإلكتروني حتى تتمكن من تسجيل الدخول بواسطته",
  login: "تسجيل الدخول",
  notReceived: "لم استلم رسالة تحقق؟",
  clickHere: "انقر هنا",
};

export const notifications: INotificationsItem[] = [
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "read",
    postId: 1,
    type: "create",
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "unread",
    postId: 3,
    type: "update",
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "read",
    postId: 3,
    type: "create",
  },
  {
    username: "سارة",
    image: "/images/userImg.png",
    status: "unread",
    postId: 3,
    type: "update",
  },
];
