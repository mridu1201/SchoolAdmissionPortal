package trailblazers.school12.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
	private String firstname;
	private String lastname;
    private String email;
    private String password;
    private int age;
    private String role;
}