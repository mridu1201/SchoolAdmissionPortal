package trailblazers.school12.dto.request;

import java.util.Date;

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