package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import entity.Booking;
import entity.Booking_IF;
import entity.Shift_IF;
@Repository
public class BookingDAO extends DAO implements BookingDAO_IF{
	/** Creates Booking to database
	 * @param bk Booking object which will be added to the database
	 * @return False if task failed, true if task was done successfully
	 */
	@Override
	public boolean createBooking(Booking_IF bk) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "insert into Booking values(?,?);";
			myStatement = myCon.prepareStatement(query);
			myStatement.setInt(2, bk.getUserid());
			myStatement.setInt(1, bk.getShiftid());
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

	/**Switches shift to another shift
	 * @param shift Shift object which will be the new target of booking
	 * @param bk Booking object which is swapped
	 * @return False if task failed, true if task was done successfully
	 */
	@Override
	public boolean updateBooking(Shift_IF shift, Booking_IF bk) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "update Booking set Shift_ID = ? where User_ID = ? AND Shift_ID = ?";
			myStatement = myCon.prepareStatement(query);
			myStatement.setInt(1, bk.getShiftid());
			myStatement.setInt(2, bk.getUserid());
			myStatement.setInt(3, shift.getId());
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


	/**Deletes Booking from database
	 * @param bk Booking object which will be deleted
	 * @return False if task failed, true if task was done successfully
	 */
	@Override
	public boolean deleteBooking(Booking_IF bk) {
		PreparedStatement myStatement = null;
		String query = null;
		int count = 0;
		try{
			query = "delete from Booking where Shift_ID = ? AND User_ID = ?";
			myStatement = myCon.prepareStatement(query);
			myStatement.setInt(1, bk.getShiftid());
			myStatement.setInt(2, bk.getUserid());
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

	/**Returns all bookings for a specific activity
	 * @param user_id ID number of the user who is searching
	 * @return returns a list of bookings
	 */
	@Override
	public Booking_IF[] readBookingsByUserId(int user_id) {
		ArrayList<Booking_IF> bookings = new ArrayList();
		PreparedStatement myStatement = null;
		ResultSet myRs = null;

		try{
			String sqlSelect = "Select * from Booking where User_ID = ?";
			myStatement = myCon.prepareStatement(sqlSelect);
			myStatement.setInt(1, user_id);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int shiftid = myRs.getInt("Shift_ID");
				int userid = myRs.getInt("User_ID");

				Booking booking = new Booking(userid, shiftid);
				bookings.add(booking);
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

		Booking_IF[] ret = new Booking[bookings.size()];
		return (Booking_IF[])bookings.toArray(ret);
	}

	/**Fetches the bookings by shift id, can be used to check if a Shift is available or not
	 * @param shift_id ID number of the shift
	 * @return returns table of bookings
	 */
	@Override
	public Booking_IF[] readBookingsByShiftId(int shift_id) {
		ArrayList<Booking_IF> bookings = new ArrayList();
		PreparedStatement myStatement = null;
		ResultSet myRs = null;

		try{
			String sqlSelect = "Select * from Booking where Shift_ID = ?";
			myStatement = myCon.prepareStatement(sqlSelect);
			myStatement.setInt(1, shift_id);
			myRs = myStatement.executeQuery();

			while(myRs.next()) {
				int shiftid = myRs.getInt("Shift_ID");
				int userid = myRs.getInt("User_ID");

				Booking booking = new Booking(shiftid, userid);
				bookings.add(booking);
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

		Booking_IF[] ret = new Booking[bookings.size()];
		return (Booking_IF[])bookings.toArray(ret);
	}



}
