package trailblazers.school12.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import trailblazers.school12.model.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {
    
}
