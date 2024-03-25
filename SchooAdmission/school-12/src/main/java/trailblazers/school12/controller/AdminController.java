package trailblazers.school12.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import trailblazers.school12.model.Application;
import trailblazers.school12.service.ApplicationService;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/submit/{uid}")
    public String submitApplication(@PathVariable Long uid, @RequestBody Map<String, String> requestData) {
        String name = requestData.get("name"); 
        String fathername = requestData.get("fathername");
        String emis = requestData.get("emis");
        String occupation = requestData.get("occupation");
        String mobile = requestData.get("mobile"); 
        String gender = requestData.get("gender");
        String parentemail = requestData.get("parentemail"); 
        String address = requestData.get("address");
        String dob = requestData.get("dob");
        String mothername = requestData.get("mothername");
        String aadhar = requestData.get("aadhar");
        applicationService.submitApplication(uid,name,fathername,emis,occupation,mobile,gender,parentemail,address,dob,mothername,aadhar);
        return "Application Submitted";
    }

    @GetMapping("/application/{aid}")
    public Optional<Application> getApplicationByAid(@PathVariable Long aid) {
        return applicationService.getApplicationByAid(aid);
    }

    @GetMapping("/{uid}")
    public List<Application> getApplicationsByApplicantId(@PathVariable Long uid) {
        return applicationService.getApplicationsByUid(uid);
    }

    @GetMapping("/")
    public List<Application> getAllAdmissions() {
        return applicationService.getAllAdmissions();
    }

    @PostMapping("/approve/{aid}")
    public Application approveAdmission(@PathVariable Long aid) {
        return applicationService.approveAdmission(aid);
    }

    @PostMapping("/reject/{aid}")
    public Application rejectAdmission(@PathVariable Long aid) {
        return applicationService.rejectAdmission(aid);
    }

    @PutMapping("/update/{aid}")
    public String updateApplication(@PathVariable Long aid, @RequestBody Map<String, String> requestData) {
        String name = requestData.get("name"); 
        String fathername = requestData.get("fathername");
        String emis = requestData.get("emis");
        String occupation = requestData.get("occupation");
        String mobile = requestData.get("mobile"); 
        String gender = requestData.get("gender");
        String parentemail = requestData.get("parentemail"); 
        String address = requestData.get("address");
        String dob = requestData.get("dob");
        String mothername = requestData.get("mothername");
        String aadhar = requestData.get("aadhar");
        
        Application updatedApplication = applicationService.updateApplication(aid, name,fathername,emis,occupation,mobile,gender,parentemail,address,dob,mothername,aadhar);
        
        if (updatedApplication != null) {
            return "Application Updated";
        } else {
            return "Application with ID " + aid + " not found";
        }
    }

    @DeleteMapping("/delete/{aid}")
    public boolean deleteApplication(@PathVariable Long aid) {
        return applicationService.deleteApplication(aid);
    }

    @GetMapping("/application-count")
    public ResponseEntity<Map<String, Long>> countApplicationsByStatus() {
        Map<String, Long> applicationCounts = applicationService.countApplicationsByStatus();
        return new ResponseEntity<>(applicationCounts, HttpStatus.OK);
    }

}


