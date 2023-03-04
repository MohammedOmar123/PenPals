// JWT Constants
const JWT_KEY = 'JWT_KEY';
const CLIENT_URL = 'CLIENT_URL';

// Email constants
const EMAIL = 'EMAIL';
const PASS = 'PASS';
const CHECK_EMAIL =
  'نحن الآن في إنتظار أن تنقر على رابط التأكيد الذي قمنا بإرساله لك على بريدك الإلكتروني حتى تتمكن من تسجيل الدخول بواسطته.';
const EMAIL_VERIFICATION = 'التحقق من بريدك الإلكتروني ✔';
const EMAIL_VERIFIED_SUCCESSFULLY = 'تم تفعيل  البريد الإلكتروني بنجاح ';
const SENDER = 'بالعربية نرتقي';
const INVALID_EMAIL = 'الإيميل مستخدم مسبقا.الرجاء استخدام إيميل جديد';
const RESEND_EMAIL = 'لقد تم إرسال البريد الإلكتروني مرة آخرى';

// Error messages
const INTERNAL_SERVER_ERROR_MESSAGE = 'حدث خطأ داخلي بالنظام ';
const INVALID_CREDENTIALS = 'الإيميل او كلمة المرور غير صحيحة';

// Success messages
const CREATED_ACCOUNT = 'تم إنشاء حسابك بنجاح';
const CREATE_PROJECT = 'تم إضافة المشروع بنجاح ';
const DELETE_project = 'تم حذف المشروع بنجاح';
const CREATE_FEEDBACK = 'تم إضافة التعليق بنجاح';
const UPDATE = 'تم التعديل بنجاح';

// Authentication tokens
const ADMIN_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwiZW1haWwiOiJtb2hhbW1lZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzczNjU1MzEsImV4cCI6MTY3ODIyOTUzMX0.0CAr66OJZfkoBmW_x_o4sjGWzZ1TkPkudhs0e-V3Zrs';
const STUDENT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwiZW1haWwiOiJzYWlmQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjc3MzY2ODcxLCJleHAiOjE2NzgyMzA4NzF9.5nej89I_ZfLaH7HhqYpYX6NtM3T55eOAlrwuphcVo8M';
const VERIFICATION_TOKEN = 'something';

export {
  JWT_KEY,
  INVALID_EMAIL,
  CREATED_ACCOUNT,
  EMAIL_VERIFICATION,
  INTERNAL_SERVER_ERROR_MESSAGE,
  INVALID_CREDENTIALS,
  CREATE_PROJECT,
  CREATE_FEEDBACK,
  DELETE_project,
  UPDATE,
  PASS,
  EMAIL,
  CHECK_EMAIL,
  SENDER,
  EMAIL_VERIFIED_SUCCESSFULLY,
  ADMIN_TOKEN,
  STUDENT_TOKEN,
  VERIFICATION_TOKEN,
  CLIENT_URL,
  RESEND_EMAIL,
};
