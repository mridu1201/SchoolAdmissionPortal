package trailblazers.school12.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@Table(name = "interview")
public class Interview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long interviewId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "appId", referencedColumnName = "aid")
    private Application application;

    private Date interviewDate;
    private String interviewTime;

}
