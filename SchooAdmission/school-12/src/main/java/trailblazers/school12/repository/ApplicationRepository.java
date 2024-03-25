package trailblazers.school12.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import trailblazers.school12.model.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByUser_Uid(Long uid);

    long countByAdmissionStatus(String admissionStatus);
    
    long countByPaymentStatus(String paymentStatus);

}

