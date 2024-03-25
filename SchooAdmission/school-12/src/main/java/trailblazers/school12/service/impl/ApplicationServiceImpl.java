package trailblazers.school12.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import trailblazers.school12.model.Application;
import trailblazers.school12.model.User;
import trailblazers.school12.repository.ApplicationRepository;
import trailblazers.school12.repository.UserRepository;
import trailblazers.school12.service.ApplicationService;
import trailblazers.school12.service.EmailService;

@Service
public class ApplicationServiceImpl implements ApplicationService {
	
	@Autowired
    private  ApplicationRepository applicationRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;

    @Override
    public List<Application> getAllAdmissions() {
        return applicationRepository.findAll();
    }

	@Override
	public Application submitApplication(Long uid, String name, String fathername, String emis, String occupation, String mobile, String gender, String parentemail, String address, String mothername,String aadhar,String dob) {
        User user = userRepository.findById(uid).orElseThrow(() ->
        new EntityNotFoundException("User not found with ID: " + uid)
    );

    Application application = new Application();
    application.setPaymentStatus("Pending");
    application.setAdmissionStatus("Pending");
    application.setInterviewSchedule("Not Yet");
    application.setInterviewDate(null);
    application.setInterviewTime(null);
    application.setUser(user);
    application.setName(name);
    application.setFathername(fathername); 
    application.setEmis(emis); 
    application.setOccupation(occupation); 
    application.setMobile(mobile); 
    application.setGender(gender); 
    application.setParentemail(parentemail); 
    application.setAadhar(aadhar);
    application.setMothername(mothername);
    application.setDob(dob);
    application.setAddress(address); 

    return applicationRepository.save(application);
	}

    @Override
    public Application updateInterviewScheduleStatus(Long aid, String interviewStatus, Date interviewDate, String interviewTime) {
        Application application = applicationRepository.findById(aid)
                .orElseThrow(() -> new EntityNotFoundException("Application not found with ID: " + aid));

        application.setInterviewSchedule(interviewStatus);
        application.setInterviewDate(interviewDate);
        application.setInterviewTime(interviewTime);

        return applicationRepository.save(application);
    }


    @Override
    public Application updateApplication(Long aid, String name, String fathername, String emis, String occupation, String mobile, String gender, String parentemail, String address,String dob,String mothername,String aadhar) {
        Optional<Application> optionalApplication = applicationRepository.findById(aid);

        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();

            application.setName(name);
            application.setFathername(fathername); 
            application.setEmis(emis); 
            application.setOccupation(occupation); 
            application.setMobile(mobile); 
            application.setGender(gender); 
            application.setParentemail(parentemail); 
            application.setAadhar(aadhar);
            application.setMothername(mothername); 
            application.setDob(dob);
            application.setAddress(address); 

            return applicationRepository.save(application);
        } else {
            return null; 
        }
    }

    @Override
    public Application makePayment(Long aid) {
        Optional<Application> optionalApplication = applicationRepository.findById(aid);

        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();

            application.setPaymentStatus("Paid");

            applicationRepository.save(application);

            return application;
        } else {
            return null;
        }
    }

    @Override
    public Application approveAdmission(Long aid) {
        Optional<Application> optionalApplication = applicationRepository.findById(aid);

        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();

            application.setAdmissionStatus("Approved");

            applicationRepository.save(application);

            // Send email to parent
            String subject = "Application Status - Approved";
            String message = "Congratulations! Your application has been approved.";
            emailService.sendEmail(application.getParentemail(), subject, message);

            return application;
        } else {
            return null;
        }
    }

    @Override
    public Application rejectAdmission(Long aid) {
        Optional<Application> optionalApplication = applicationRepository.findById(aid);

        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();

            application.setAdmissionStatus("Rejected");

            applicationRepository.save(application);

            // Send email to parent
            String subject = "Application Status - Rejected";
            String message = "We regret to inform you that your application has been rejected.";
            emailService.sendEmail(application.getParentemail(), subject, message);

            return application;
        } else {
            return null;
        }
    }



	@Override
	public List<Application> getApplicationsByUid(Long uid) {
        return applicationRepository.findByUser_Uid(uid);
	}


    @Override
    public boolean deleteApplication(Long aid) {
        Optional<Application> optionalApplication = applicationRepository.findById(aid);
    
        if (optionalApplication.isPresent()) {
            applicationRepository.delete(optionalApplication.get());
            return true; // Application successfully deleted
        } else {
            return false; // Application with the given ID not found
        }
    }

    @Override
    public Optional<Application> getApplicationByAid(Long aid) {
        return applicationRepository.findById(aid);
    }
    
    @Override
    public Map<String, Long> countApplicationsByStatus() {
        long totalApplications = applicationRepository.count();
        long rejectedApplications = applicationRepository.countByAdmissionStatus("Rejected");
        long paidApplications = applicationRepository.countByPaymentStatus("Paid");
        long approvedApplications = applicationRepository.countByAdmissionStatus("Approved");

        Map<String, Long> applicationCounts = new HashMap<>();
        applicationCounts.put("totalApplications", totalApplications);
        applicationCounts.put("rejectedApplications", rejectedApplications);
        applicationCounts.put("paidApplications", paidApplications);
        applicationCounts.put("approvedApplications", approvedApplications);

        return applicationCounts;
    }



}
