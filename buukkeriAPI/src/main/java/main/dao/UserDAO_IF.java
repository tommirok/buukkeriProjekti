package main.dao;

import main.entity.User_IF;

public interface UserDAO_IF {
	boolean createUser(User_IF user);
	boolean updateUser(User_IF user);
	boolean deleteUser(User_IF user);
	User_IF readUser(String email, String pass);
}
