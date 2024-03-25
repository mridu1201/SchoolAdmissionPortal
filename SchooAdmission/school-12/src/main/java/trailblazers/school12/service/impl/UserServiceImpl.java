package trailblazers.school12.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import trailblazers.school12.dto.request.UserRequest;
import trailblazers.school12.dto.response.UserCountsResponse;
import trailblazers.school12.dto.response.UserResponse;
import trailblazers.school12.model.User;
import trailblazers.school12.model.enumerate.Role;
import trailblazers.school12.repository.UserRepository;
import trailblazers.school12.service.UserService;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

   private final UserRepository userRepository;
   @Override
   public List<UserResponse> getAllUsers() {
       List<User> userList = userRepository.findAll();
       return userList.stream()
            //    .filter(user -> !user.getRole().equals(Role.ADMIN))
               .map(this::mapUserToUserResponse)
               .collect(Collectors.toList());
   }
   @Override
   public Role getUserRole(Long uid) {
    // Assuming you have a repository or database access to fetch the user's role
    // Replace this with your actual data retrieval logic
    Optional<User> userOptional = userRepository.findById(uid);

    if (userOptional.isPresent()) {
        User user = userOptional.get();
        // Assuming the User entity has a 'role' property
        Role role = user.getRole(); // Replace 'getRole()' with the actual method to get the role

        if (role != null) {
            return role;
        }
    }

    return null; // Return null if the user or role is not found
}

   @Override
    public List<UserResponse> getAdminUsers() {
        // Check if the currently logged-in user has the "ADMIN" role
        if (hasAdminRole()) {
            List<User> adminUsers = userRepository.findByRole(Role.ADMIN);
            return adminUsers.stream()
                    .map(this::mapUserToUserResponse)
                    .collect(Collectors.toList());
        }
        return new ArrayList<>(); // Return an empty list if the current user is not an admin
    }
    private boolean hasAdminRole() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("ADMIN"));
    }

	@Override
	public List<UserResponse> getStudentUsers() {
        // Check if the currently logged-in user has the "STUDENT" role
        if (hasStudentRole()) {
            List<User> studentUsers = userRepository.findByRole(Role.STUDENT);
            return studentUsers.stream()
                    .map(this::mapUserToUserResponse)
                    .collect(Collectors.toList());
        }
        return new ArrayList<>(); // Return an empty list if the current user is not a student
    }
	private boolean hasStudentRole() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getAuthorities().stream()
                .anyMatch(authority -> authority.getAuthority().equals("STUDENT"));
    }


	    @Override
	    public UserResponse getUser(Long uid) {
	        User user = userRepository.findByUid(uid);
	        if (user != null) {
	            return mapUserToUserResponse(user);
	        } else {
	            return null; // Handle user not found
	        }
	    }

	    @Override
	    public UserResponse updateUser(UserRequest request, Long uid) {
	    	 User user = userRepository.findByUid(uid);
	    	    if (user != null) {
	    	        user.setFirstname(request.getFirstname());
	    	        user.setLastname(request.getLastname());
	    	        user.setEmail(request.getEmail());
	    	        // user.setPassword(request.getPassword());
	    	        user.setAge(request.getAge());
	    	        // user.setRole(Role.valueOf(request.getRole()));
	    	        
	    	        // Check if request.getIsEnabled() is not null before setting it
	    	        // if (request.getIsEnabled() != null) {
	    	        //     user.setIsEnabled(request.getIsEnabled());
	    	        // }
	    	        
	    	        userRepository.save(user); // Update the existing user
	    	        return mapUserToUserResponse(user);
	    	    } else {
	    	        return null; // Handle user not found
	    	    }
	    }

	    @Override
	    public boolean deleteUser(Long uid) {
	        User user = userRepository.findByUid(uid);

	        if (user != null) {
	            userRepository.delete(user); // Use delete instead of deleteByUid
	            return true;
	        } else {
	            return false; // Handle user not found
	        }
	    }

	    private UserResponse mapUserToUserResponse(User user) {
	        return UserResponse.builder()
	                .uid(user.getUid())
	                .firstname(user.getFirstname())
	                .lastname(user.getLastname())
	                .password(user.getPassword())
	                .age(user.getAge())
	                .email(user.getEmail())
	                .role(user.getRole())
	                .isEnabled(user.getIsEnabled())
	                .build();
	    }
		@Override
		public UserCountsResponse getUserCounts() {
			UserCountsResponse countsResponse = new UserCountsResponse();
			List<User> allUsers = userRepository.findAll();
	
			long totalUserCount = allUsers.size();
			long adminCount = countUsersByRole(allUsers, Role.ADMIN);
			long studentCount = countUsersByRole(allUsers, Role.STUDENT);
	
			countsResponse.setTotalUsers(totalUserCount);
			countsResponse.setAdminUsers(adminCount);
			countsResponse.setStudentUsers(studentCount);
	
			return countsResponse;
		}
	
		private long countUsersByRole(List<User> users, Role role) {
			return users.stream()
				.filter(user -> user.getRole() == role)
				.count();
		}
}

