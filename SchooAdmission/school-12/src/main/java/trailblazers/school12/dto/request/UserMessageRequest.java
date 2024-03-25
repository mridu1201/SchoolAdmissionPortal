package trailblazers.school12.dto.request;

import java.util.Date;

public class UserMessageRequest {
    private Date sentDate;
    private String messageText;
    
    public Date getSentDate() {
        return sentDate;
    }

    public void setSentDate(Date sentDate) {
        this.sentDate = sentDate;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

}