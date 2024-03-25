package trailblazers.school12.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import trailblazers.school12.constant.Api;
import trailblazers.school12.model.Application;
import trailblazers.school12.service.ApplicationService;

@RestController
@RequestMapping(Api.APPLICATION)
public class ApplicationController {
    private final ApplicationService applicationService;

    @Autowired
    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }
    
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


    @GetMapping("/user/{uid}")
    public List<Application> getApplicationsByApplicantId(@PathVariable Long uid) {
        return applicationService.getApplicationsByUid(uid);
    }

    @PostMapping("/makepayment/{aid}")
    public Application makePayment(@PathVariable Long aid) {
        return applicationService.makePayment(aid);
    }
}
