const API_ENDPOINTS = {
    LOGIN: '/api/v1/auth/login',
    SIGNUP: '/api/v1/auth/register',
    PROFILE: '/api/v1/user',
    EDIT_PROFILE: '/api/v1/user/update',
    ALL_USERS: '/api/v1/user/all',
    SUBMIT_APPLICATION:'/student/submit/',
    PAYMENT_STATUS:'/student/makepayment/',
    ALL_APPLICATION:'/admin/',
    SCHEDULE_INTERVIEW:'/admin/schedule/',
    GET_ROLE_BY_UID:'/api/v1/user/role',
    DELETE_APPLICATION:'/admin/delete',
    GET_COUNT:'/api/v1/user/counts',
    VIEW_APPLICATION:'/admin/application/',
    ACCEPT_APPLICATION:'/admin/approve/',
    REJECT_APPLICATION:'/admin/reject/',
    SEND_MESSAGE:'/student/send',
    VIEW_MESSAGE:'/student',
    EDIT_APPLICATION:'/admin/update',
    CONTACT_US:'/student/contact-us',
    GET_APPLICATIONCOUNT:'/admin/application-count',
    SUBMIT_FEEDBACK:'/feedback/add'
  };
  
  export default API_ENDPOINTS;
  