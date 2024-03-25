package trailblazers.school12.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trailblazers.school12.model.Interview;

public interface InterviewRepository extends JpaRepository<Interview, Long> {
    // You can add custom query methods here if needed
}
