package trailblazers.school12.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import trailblazers.school12.model.Application;
import trailblazers.school12.model.Interview;
import trailblazers.school12.repository.ApplicationRepository;
import trailblazers.school12.repository.InterviewRepository;
import trailblazers.school12.service.ApplicationService;
import trailblazers.school12.service.InterviewService;

import java.util.Date;
import java.util.List;

@Service
public class InterviewServiceImpl implements InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;
    @Autowired
    private ApplicationRepository applicationRepository;    
    @Autowired
    private ApplicationService applicationService;    


    public Interview scheduleInterview(Long aid, Date interviewDate, String interviewTime) {
        Application application = applicationRepository.findById(aid)
                .orElseThrow(() -> new EntityNotFoundException("Application not found with ID: " + aid));

        Interview interview = new Interview();
        interview.setApplication(application);
        interview.setInterviewDate(interviewDate);
        interview.setInterviewTime(interviewTime);

        interview = interviewRepository.save(interview);

        applicationService.updateInterviewScheduleStatus(aid, "Scheduled",interviewDate,interviewTime);

        return interview;
    }

    @Override
    public Interview updateInterviewDetails(Long interviewId, Date interviewDate, String interviewTime) {
        
        Interview interview = interviewRepository.findById(interviewId).orElse(null);

        if (interview != null) {
            interview.setInterviewDate(interviewDate);
            interview.setInterviewTime(interviewTime);
            return interviewRepository.save(interview);
        }

        return null; // Handle the case when the interview is not found
    }

    @Override
    public Interview getInterviewById(Long interviewId) {
        return interviewRepository.findById(interviewId).orElse(null);
    }

    @Override
    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }
}
