package trailblazers.school12.service;
import java.util.List;

import trailblazers.school12.dto.request.UserRequest;
import trailblazers.school12.dto.response.UserCountsResponse;
import trailblazers.school12.dto.response.UserResponse;
import trailblazers.school12.model.enumerate.Role;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

    public List<UserResponse> getAdminUsers();

    public List<UserResponse> getStudentUsers();

    public Role getUserRole(Long uid);

    public UserCountsResponse getUserCounts();

}
