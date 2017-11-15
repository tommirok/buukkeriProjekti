package main.dao;

import main.entity.Activity_IF;

public interface ActivityDAO_IF {
	boolean createActivity(Activity_IF act);
	boolean updateActivity(Activity_IF act);
	boolean deleteActivity(Activity_IF act);
	Activity_IF[] readActivitiesBySPId(int sp_id);
	Activity_IF readActivityById(int id);
	Activity_IF[] readActivities();

}
