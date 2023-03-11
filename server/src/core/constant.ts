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
const EMAIL_IS_NOT_CONFIRMED =
  'لم يتم تأكيد البريد الإلكتروني, الرجاء التحقق من اليريد ،الإلكتروني مرة أخرى';
const DELETE_FAILED = 'فشلت عملية الحذف';
const UPDATE_FAILED = 'فشلت عملية التعديل';

// Error messages
const INTERNAL_SERVER_ERROR_MESSAGE = 'حدث خطأ داخلي بالنظام ';
const INVALID_CREDENTIALS = 'الإيميل او كلمة المرور غير صحيحة';

// Success messages
const CREATED_ACCOUNT = 'تم إنشاء حسابك بنجاح';
const CREATE_PROJECT = 'تم إضافة المشروع بنجاح ';
const DELETE_project = 'تم حذف المشروع بنجاح';
const CREATE_FEEDBACK = 'تم إضافة التعليق بنجاح';
const LOGOUT = 'تم تسجيل الخروج';
const UPDATE = 'تم التعديل بنجاح';
const LOGIN = 'تم تسجيل الدخول بنجاح';
const DELETE_FEEDBACK = 'تم حذف التعليق بنجاح';
// Authentication tokens
const ADMIN_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwiZW1haWwiOiJtb2hhbW1lZEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzg1NDM2MzUsImV4cCI6MTY3OTQwNzYzNX0.LjZ73VMWkIm1ogUOZRpCIQj4hEMuu0mS7aYxIOKXl_w';
const STUDENT_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyIiwiZW1haWwiOiJzYWlmQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjc4NTQzNzE3LCJleHAiOjE2Nzk0MDc3MTd9.0ArmvD60cLAg9REPZxCv1pBBLJiXRFmrzl8wRK1OPiw';
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
  EMAIL_IS_NOT_CONFIRMED,
  LOGOUT,
  LOGIN,
  DELETE_FEEDBACK,
  DELETE_FAILED,
  UPDATE_FAILED,
};
