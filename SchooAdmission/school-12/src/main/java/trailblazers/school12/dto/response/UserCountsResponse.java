package trailblazers.school12.dto.response;

import lombok.Data;

@Data
public class UserCountsResponse {
    private long totalUsers;
    private long adminUsers;
    private long studentUsers;

}
