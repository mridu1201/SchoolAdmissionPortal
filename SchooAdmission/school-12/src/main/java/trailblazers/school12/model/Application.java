package trailblazers.school12.model;



import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "_applications")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;
    
    private String name;
    private String fathername;
    private String mothername;
    private String emis;
    private String occupation;
    private String mobile;
    private String gender;
    private String parentemail;
    private String dob;
    private String aadhar;
    private String address;

    private String admissionStatus;
    private String paymentStatus;
    private String interviewSchedule;
    private Date interviewDate;
    private String interviewTime;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "uid", referencedColumnName = "uid")
    private User user;




 
}


