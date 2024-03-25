package trailblazers.school12.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trailblazers.school12.model.Interview;
import trailblazers.school12.service.InterviewService;    

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class InterviewController {
    private final InterviewService interviewService;

    @Autowired
    public InterviewController(InterviewService interviewService) {
        this.interviewService = interviewService;
    }

    @PostMapping("/schedule/{aid}")
    public Interview scheduleInterview(
            @PathVariable Long aid,
            @RequestBody InterviewRequest interviewRequest) {
        Date interviewDate = interviewRequest.getInterviewDate();
        String interviewTime = interviewRequest.getInterviewTime();
        return interviewService.scheduleInterview(aid, interviewDate, interviewTime);
    }

    @PutMapping("/update/interview/{interviewId}")
    public Interview updateInterviewDetails(
            @PathVariable Long interviewId,
            @RequestBody InterviewRequest interviewRequest) {
        Date interviewDate = interviewRequest.getInterviewDate();
        String interviewTime = interviewRequest.getInterviewTime();
        return interviewService.updateInterviewDetails(interviewId, interviewDate, interviewTime);
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

class InterviewRequest {
    private Date interviewDate;
    private String interviewTime;

    public Date getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(Date interviewDate) {
        this.interviewDate = interviewDate;
    }

    public String getInterviewTime() {
        return interviewTime;
    }

    public void setInterviewTime(String interviewTime) {
        this.interviewTime = interviewTime;
    }
}