package entity;
/**Booking Object
 *
 * @author Roni, Tommi, Marika,Ville
 *
 */
public class Booking implements Booking_IF {

	private int userid;
	private int shiftid;

	/**
	 * Constructor with parameters
	 * @param userid ID number of the user who is making the reservation
	 * @param shiftid ID number of the shift that is the target of the reservation
	 */
	public Booking(int userid, int shiftid) {
		this.userid = userid;
		this.shiftid = shiftid;
	}
	/**
	 * @return userid returns user ID
	 */
	public int getUserid() {
		return userid;
	}
	/**
	 * @return shiftid returns shift ID
	 */
	public int getShiftid() {
		return shiftid;
	}





}
