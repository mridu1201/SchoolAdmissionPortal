package trailblazers.school12.service;

import java.util.List;

import trailblazers.school12.model.Student;

public interface StudentService {
    List<Student> getAllStudents();
    Student applyForAdmission(Student student);
    Student approveAdmission(Long studentId);
    public Student paymentAdmission(Long studentId);
    Student rejectAdmission(Long studentId);
    public boolean deleteStudent(Long studentId);
    public Student editStudent(Long studentId, Student updatedStudent);
    Student getStudentById(Long studentId);
}
