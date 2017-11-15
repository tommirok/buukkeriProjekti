package main.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import main.entity.Activity;
import main.entity.Activity_IF;
@Repository
public class ActivityDAO extends DAO implements ActivityDAO_IF {
	/**Creation of activity to database
	 * @param Activity data
	 * @return false if fails true if success
	 */
	@Override
	public boolean createActivity(Activity_IF act) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "insert ignore into Activity values(default,?, ?, ?, ?);";
			myStatement = myCon.prepareStatement(query);
			myStatement.setString(1, act.getName());
			myStatement.setInt(2, act.getSpid());
			myStatement.setString(3, act.getLocation());
			myStatement.setString(4, act.getDescription());
			count = myStatement.executeUpdate();

		} catch(Exception e) {
			e.printStackTrace();
		} finally{
			try {
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		if(count!=1){
			return false;
		}
		else{
			return true;
		}
	}
	//Sets location for activity
	/**updating activity
	 * @param activity data
	 * @return false if fails true if success
	 */
	@Override
	public boolean updateActivity(Activity_IF act) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "update Activity set Location = ? where ID = ?";
			myStatement = myCon.prepareStatement(query);
			myStatement.setString(1, act.getLocation());
			myStatement.setInt(2,act.getId());
			count = myStatement.executeUpdate();
	}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		if(count!=1){
			return false;
		}
		else{
			return true;
		}
	}
	//Deletes activity by ID
	/**delete activity
	 * @param activity data
	 * @return false if fails true if success
	 */
	@Override
	public boolean deleteActivity(Activity_IF act) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "delete from Activity where ID = ?";
			myStatement = myCon.prepareStatement(query);
			myStatement.setInt(1, act.getId());
			count = myStatement.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		}
		finally{
			try {
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		if(count!=1){
			return false;
		}
		else{
			return true;
		}
	}
	//Returns all activities by spID.
	/**returns all activities by service provider id
	 * @param sp_id service provider id
	 * @return list of activities
	 */
	@Override
	public Activity_IF[] readActivitiesBySPId(int sp_id) {
		ArrayList<Activity_IF> activities = new ArrayList();
		PreparedStatement myStatement = null;
		ResultSet myRs = null;

		try{
			String sqlSelect = "Select * from Activity where SP_ID = ?";
			myStatement = myCon.prepareStatement(sqlSelect);
			myStatement.setInt(1, sp_id);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int id = myRs.getInt("ID");
				String name = myRs.getString("Name");
				int SP_ID = myRs.getInt("SP_ID");
				String location = myRs.getString("Location");
				String description = myRs.getString("Description");

				Activity_IF act = new Activity(id,name,SP_ID,location,description);
				activities.add(act);
			}

		}
		catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				if (myRs != null)
					myRs.close();
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}

		Activity_IF[] palautus = new Activity[activities.size()];
		return (Activity_IF[])activities.toArray(palautus);
	}
	/**activity by id number
	 * @param ID activitys id number
	 * @return act activity data
	 */
	@Override
	public Activity_IF readActivityById(int ID) {
		PreparedStatement myStatement = null;
		ResultSet myRs = null;
		Activity_IF act = null;

		try{
			String sqlSelect = "Select * from Activity where ID = ?";
			myStatement = myCon.prepareStatement(sqlSelect);
			myStatement.setInt(1, ID);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int id = myRs.getInt("ID");
				String name = myRs.getString("Name");
				int SP_ID = myRs.getInt("SP_ID");
				String location = myRs.getString("Location");
				String description = myRs.getString("Description");

				act = new Activity(id,name,SP_ID,location,description);
			}

		}
		catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				if (myRs != null)
					myRs.close();
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		return act;
	}

	//Returns all activities
	/**return all activities
	 * @return return acitivity list
	 */
	@Override
	public Activity_IF[] readActivities() {
		ArrayList<Activity_IF> activities = new ArrayList();
		PreparedStatement myStatement = null;
		ResultSet myRs = null;

		try{
			String sqlSelect = "Select * from Activity";
			myStatement = myCon.prepareStatement(sqlSelect);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int id = myRs.getInt("ID");
				String name = myRs.getString("Name");
				int sp_id = myRs.getInt("SP_ID");
				String location = myRs.getString("Location");
				String description = myRs.getString("Description");

				Activity_IF act = new Activity(id,name,sp_id,location,description);
				activities.add(act);
			}

		}
		catch(Exception e){
			e.printStackTrace();
		}
		finally{
			try {
				if (myRs != null)
					myRs.close();
				if (myStatement != null)
					myStatement.close();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}

		Activity_IF[] palautus = new Activity[activities.size()];
		return (Activity_IF[])activities.toArray(palautus);
	}
}
