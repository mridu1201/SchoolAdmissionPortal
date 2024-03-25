package trailblazers.school12.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import trailblazers.school12.constant.Api;
import trailblazers.school12.dto.request.UserRequest;
import trailblazers.school12.dto.response.UserCountsResponse;
import trailblazers.school12.dto.response.UserResponse;
import trailblazers.school12.model.enumerate.Role;
import trailblazers.school12.service.UserService;

@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@Tag(name = "User")
public class UserController {

    private final UserService userService;  
    

    @GetMapping("/admin")
    public ResponseEntity<List<UserResponse>> getAdminUsers() {
        List<UserResponse> adminUsers = userService.getAdminUsers();
        return ResponseEntity.ok(adminUsers);
    }

    @GetMapping("/student")
    @PreAuthorize("hasRole('STUDENT')")
    public ResponseEntity<List<UserResponse>> getStudentUsers() {
        List<UserResponse> studentUsers = userService.getStudentUsers();
        return ResponseEntity.ok(studentUsers);
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> userList = userService.getAllUsers();
        return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
    }

    @GetMapping("/{uid}")
    public ResponseEntity<UserResponse> getUser(@PathVariable Long uid) {
        UserResponse userResponse = userService.getUser(uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
    @GetMapping("/password/{uid}")
    public ResponseEntity<UserResponse> getUserPassword(@PathVariable Long uid) {
        UserResponse userResponse = userService.getUser(uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }
    @GetMapping("/role/{uid}")
    public ResponseEntity<Map<String, String>> getUserRole(@PathVariable Long uid) {
        Role role = userService.getUserRole(uid);
        
        if (role != null) {
            Map<String, String> roleMap = new HashMap<>();
            roleMap.put("role", role.name()); // Assuming role.name() returns the role name
            return ResponseEntity.ok().body(roleMap);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    

    @PutMapping("/update/{uid}")
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest request, @PathVariable Long uid) {
        UserResponse userResponse = userService.updateUser(request, uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deleteUser(@PathVariable Long uid) {
        boolean isDeleted = userService.deleteUser(uid); // Updated method name
        return isDeleted ? ResponseEntity.ok().body("User deleted successfully!") : ResponseEntity.notFound().build();
    }

    @GetMapping("/counts")
    public ResponseEntity<UserCountsResponse> getUserCounts() {
        UserCountsResponse userCountsResponse = userService.getUserCounts();
        return ResponseEntity.ok(userCountsResponse);
    }


}

