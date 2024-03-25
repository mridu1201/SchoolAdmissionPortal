package trailblazers.school12.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import trailblazers.school12.model.Application;
import trailblazers.school12.model.Interview;
// import trailblazers.school12.model.Student;
import trailblazers.school12.service.ApplicationService;
// import trailblazers.school12.service.StudentService;
import trailblazers.school12.service.InterviewService;

@RestController
@RequestMapping("/student")
public class StudentController {

    
    @Autowired
    private ApplicationService applicationService;
    @Autowired
    private InterviewService interviewService;

    @PostMapping("/submit/{uid}")
    public Application submitApplication(@PathVariable Long uid, @RequestBody Map<String, String> requestData) {
        String name = requestData.get("name"); 
        String fathername = requestData.get("fathername");
        String emis = requestData.get("emis");
        String occupation = requestData.get("occupation");
        String mobile = requestData.get("mobile"); 
        String gender = requestData.get("gender");
        String parentemail = requestData.get("parentemail"); 
        String mothername = requestData.get("mothername"); 
        String aadhar = requestData.get("aadhar"); 
        String dob = requestData.get("dob"); 
        String address = requestData.get("address");
        return applicationService.submitApplication(uid,name,fathername,emis,occupation,mobile,gender,parentemail,address,mothername,aadhar,dob);
        // return "Application Submitted";
    }

    @GetMapping("/{uid}")
    public List<Application> getApplicationsByApplicantId(@PathVariable Long uid) {
        return applicationService.getApplicationsByUid(uid);
    }

    @PostMapping("/makepayment/{aid}")
    public Application makePayment(@PathVariable Long aid) {
        return applicationService.makePayment(aid);
    }

    @GetMapping("/interview/{interviewId}")
    public Interview getInterviewById(@PathVariable Long interviewId) {
        return interviewService.getInterviewById(interviewId);
    }

    @GetMapping("/interview")
    public List<Interview> getAllInterviews() {
        return interviewService.getAllInterviews();
    }    

    
}
