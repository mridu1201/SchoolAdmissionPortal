package trailblazers.school12.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import trailblazers.school12.model.Student;
import trailblazers.school12.repository.StudentRepository;
import trailblazers.school12.service.StudentService;


@Service
@Transactional
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    @Autowired
    private final StudentRepository studentRepository; 

    @Override
    public Student applyForAdmission(Student student) {
        Student newStudent = Student.builder()
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .email(student.getEmail())
                .admissionStatus("Pending") 
                .paymentStatus("Pending")
                .build();

        studentRepository.save(newStudent); 

        return newStudent;
    }

    @Override
    public Student approveAdmission(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            student.setAdmissionStatus("Approved");

            studentRepository.save(student);

            return student;
        } else {
            return null;
        }
    }

    @Override
    public Student paymentAdmission(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            student.setPaymentStatus("Paid");

            studentRepository.save(student);

            return student;
        } else {
            return null;
        }
    }

    @Override
    public Student rejectAdmission(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            student.setAdmissionStatus("Rejected");

            studentRepository.save(student);

            return student;
        } else {
            return null; 
        }
    }

    @Override
    public List<Student> getAllStudents() {
        List<Student> students = studentRepository.findAll();

        return students;
    }
    
    @Override
    public Student editStudent(Long studentId, Student updatedStudent) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            // Update student details with the provided updatedStudent
            student.setFirstName(updatedStudent.getFirstName());
            student.setLastName(updatedStudent.getLastName());
            student.setEmail(updatedStudent.getEmail());

            studentRepository.save(student);

            return student;
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteStudent(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);

        if (optionalStudent.isPresent()) {
            studentRepository.deleteById(studentId);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Student getStudentById(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);
        
        return optionalStudent.orElse(null);
    }


}
