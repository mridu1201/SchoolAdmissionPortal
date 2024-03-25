package trailblazers.school12.service;

import trailblazers.school12.model.Interview;

import java.util.Date;
import java.util.List;

public interface InterviewService {
    Interview scheduleInterview(Long aid, Date interviewDate, String interviewTime);

    Interview updateInterviewDetails(Long interviewId, Date interviewDate, String interviewTime);

    Interview getInterviewById(Long interviewId);

    List<Interview> getAllInterviews();
}
