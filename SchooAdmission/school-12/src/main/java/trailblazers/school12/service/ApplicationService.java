package trailblazers.school12.service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import trailblazers.school12.model.Application;

public interface ApplicationService {
    public Application submitApplication(Long uid, String name, String fathername, String emis, String occupation, String mobile, String gender, String parentemail, String address, String mothername,String aadhar,String dob);
    public Application updateInterviewScheduleStatus(Long aid, String interviewStatus, Date interviewDate, String interviewTime);
    public Application makePayment(Long aid);
    public List<Application> getApplicationsByUid(Long uid);
    public Optional<Application> getApplicationByAid(Long aid);
    public List<Application> getAllAdmissions();
    public Application approveAdmission(Long aid);
    public Application rejectAdmission(Long aid);
    public boolean deleteApplication(Long aid);
    public Application updateApplication(Long aid, String name, String fathername, String emis, String occupation, String mobile, String gender, String parentemail, String address,String dob,String mothername,String aadhar);
    public Map<String, Long> countApplicationsByStatus();
}