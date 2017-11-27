package main.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import main.entity.Sport;
import main.entity.Sport_IF;
@Repository
public class SportDAO extends DAO implements SportDAO_IF {

	@Override
	public Sport_IF[] getSports() {
		ArrayList<Sport_IF> sports = new ArrayList();
		PreparedStatement myStatement = null;
		ResultSet myRs = null;

		try{
			String sqlSelect = "Select * from Sport";
			myStatement = myCon.prepareStatement(sqlSelect);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int id = myRs.getInt("ID");
				String name = myRs.getString("Name");

				Sport sport = new Sport(id, name);
				sports.add(sport);
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

		Sport[] palautus = new Sport[sports.size()];
		return (Sport_IF[])sports.toArray(palautus);
	}

	@Override
	public boolean newsport(Sport_IF sport) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "insert ignore into Sport values(default,?);";
			myStatement = myCon.prepareStatement(query);
			myStatement.setString(1, sport.getName());
			count = myStatement.executeUpdate();
			System.out.println("Sport has been created");

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

	@Override
	public boolean delsport(Sport_IF sport) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "delete from Sport where Name = ?";
			myStatement = myCon.prepareStatement(query);
			myStatement.setString(1, sport.getName());
			count = myStatement.executeUpdate();
			System.out.println("Sport has been Deleted");

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

}
