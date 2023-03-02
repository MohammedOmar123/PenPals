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

export const arabicRegister = {
  firstName: "الاسم الأول",
  lastName: "الاسم الأخير",
  email: "البريد الالكتروني",
  password: "كلمة المرور",
  confirmPassword: "تأكيد كلمة المرور",
  register: "تسجيل حساب",
  login: "تسجيل الدخول",
  alreadyHaveAccount: 'لديك حساب بالفعل؟',
  validationMessages:{
    requiredFirstName: "الرجاء إدخال الاسم الأول",
    requiredLastName: "الرجاء إدخال الاسم الأخير",
    requiredEmail: "الرجاء إدخال البريد الإلكتروني",
    requiredPassword: "الرجاء إدخال كلمة المرور",
    requiredConfirmPassword: "الرجاء إدخال تأكيد كلمة المرور",
    invalidEmail: "البريد الالكتروني غير صحيح",
    invalidPassword: "كلمة المرور غير صحيحة",
    invalidConfirmPassword: "تأكيد كلمة المرور غير صحيح",
    passwordNotMatch: "كلمة المرور غير متطابقة",
    minLengthPassword: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل"
  }
};
