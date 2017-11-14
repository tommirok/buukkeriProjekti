package service;

import dao.UserDAO_IF;
import entity.User_IF;

public class UserService {
	
	private UserDAO_IF userdao;
	
 public User_IF getUser(String email, String pass) { 
	 return userdao.readUser(email, pass);
 }
 public boolean createUser(User_IF user) {
	 return userdao.createUser(user);
 }
 public boolean updateUser(User_IF user) {
	 return userdao.updateUser(user);
 }
 public boolean deleteUser(User_IF user) {
	 return userdao.deleteUser(user);
 }
}
